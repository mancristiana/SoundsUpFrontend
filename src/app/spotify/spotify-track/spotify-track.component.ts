/**
 * Created by mancr on 3/12/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyTrack } from '../../shared/models/track.model';

@Component({
    selector: 'spotify-track',
    templateUrl: 'spotify-track.component.html',
    styleUrls: ['spotify-track.component.less']
})
export class SpotifyTrackComponent {
    @Input() track: SpotifyTrack;
    @Input() hasSelectionButton: boolean = false;
    @Input() hasUnselectionButton: boolean = false;
    @Output() trackSelected = new EventEmitter<SpotifyTrack>();
    @Output() trackUnselected = new EventEmitter<SpotifyTrack>();

    select() {
        this.trackSelected.emit(this.track);
    }

    unselect() {
        this.trackUnselected.emit(this.track);
    }


}
