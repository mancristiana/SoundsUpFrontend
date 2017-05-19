/**
 * Created by mancr on 3/12/2017.
 */
import { Component } from '@angular/core';
import { SpotifyTrack } from '../../shared/models/track.model';

@Component({
    selector: 'spotify-track-selector',
    templateUrl: 'spotify-track-selector.component.html'
})
export class SpotifyTrackSelectorComponent {
    tracks: SpotifyTrack[];

    constructor() {
        this.tracks = [];
    }

    setTracks(tracks) {
        console.log("Setting tracks", tracks);
        this.tracks = tracks;
    }

    doStuffOnTrackSelected(track: SpotifyTrack) {
        console.log("track selected", track);
    }


}
