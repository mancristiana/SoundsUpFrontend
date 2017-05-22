import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../models/track.model';
import { SpotifyTrack } from '../models/spotify-track.model';

/*
 * This Pipe transforms a SpotifyTrack object into a Track object recognized by SoundsUpApi
 */
@Pipe({name: 'spotifyToTrack'})
export class SpotifyTrackToTrackPipe implements PipeTransform {

    transform(spotify: SpotifyTrack): Track {

        let track = {
            spotifyId: spotify.id,
            name: spotify.name,
            previewUrl: spotify.preview_url,
            album: {
                name: spotify.album.name,
                id: spotify.album.id,
                imageUrl: spotify.album.images[0].url
            },
            artist: {
                name: spotify.artists[0].name,
                id: spotify.artists[0].id
            },

            externalUrls: spotify.external_urls
        };
        return track as Track;

    }
}
