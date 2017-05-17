/**
 * Created by mancr on 17-May-17.
 */
export class Track {
    id: number;
    spotifyId: string;
    name: string;

    previewUrl: string;
    album: {
        id: string,
        name:string,
        imageUrl: string
    };
    artist: {
        id: string,
        name: string
    };
    externalUrls: {
        spotify: string
    };

    public setTrackFromSpotify(spotify: SpotifyTrack) {
        this.spotifyId = spotify.id;
        this.name = spotify.name;
        this.previewUrl = spotify.preview_url;
        this.album = {
            name: spotify.album.name,
            id: spotify.album.id,
            imageUrl: spotify.album.images[0].url
        };
        this.artist = {
            name: spotify.artists[0].name,
            id: spotify.artists[0].id
        };

        this.externalUrls = spotify.external_urls;
    }
}

export class SpotifyTrack {
    id: string;
    name: string;

    preview_url: string;

    album: {
        id: string;
        name: string;
        images: {
            height: number;
            url: string;
            width: number
        }[]
    };

    artists: {
        id: string;
        name: string;
        external_urls: {
            spotify: string
        }
    }[];

    external_urls: {
        spotify: string
    };
}
