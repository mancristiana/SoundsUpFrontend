/**
 * Created by mancr on 3/12/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyTrack } from '../../shared/models/track.model';

@Component({
    selector: 'spotify-track-list',
    templateUrl: 'spotify-track-list.component.html',
    styleUrls: ['spotify-track-list.component.less']
})
export class SpotifyTrackListComponent {
    @Input() tracks: SpotifyTrack[];
    @Output() trackSelected = new EventEmitter<SpotifyTrack>();

    select(track: SpotifyTrack) {
        this.trackSelected.emit(track);
    }

}
