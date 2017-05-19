/**
 * Created by mancr on 3/12/2017.
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { SpotifyTrack } from '../../shared/models/spotify-track.model';


@Component({
    selector: 'spotify-track-selector',
    templateUrl: 'spotify-track-selector.component.html'
})
export class SpotifyTrackSelectorComponent {
    tracks: SpotifyTrack[];
    selectedTrack: SpotifyTrack;
    @Output() selected = new EventEmitter<SpotifyTrack>();

    constructor() {
        this.tracks = [];
    }

    setTracks(tracks) {
        this.tracks = tracks;
    }

    onTrackSelection(track: SpotifyTrack) {
        this.selectedTrack = track;
        this.selected.emit(track);
    }


}
