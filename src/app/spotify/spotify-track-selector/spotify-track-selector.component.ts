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
    selectedTrack: SpotifyTrack;

    constructor() {
        this.tracks = [];
    }

    setTracks(tracks) {
        this.tracks = tracks;
    }

    onTrackSelection(track: SpotifyTrack) {
        this.selectedTrack = track;
    }


}
