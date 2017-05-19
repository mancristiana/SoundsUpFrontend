/**
 * Created by mancr on 19-May-17.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SpotifyTrack } from '../../shared/models/track.model';

@Component({
    selector: 'new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.less']
})
export class NewPostComponent {

    constructor(private location: Location) {
    }

    goBack(): void {
        this.location.back();
    }

    onTrackSelection(track: SpotifyTrack) {
        console.log(track);
    }

}
