/**
 * Created by mancr on 19-May-17.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Post } from '../../shared/models/post.model';
import { SpotifyTrack } from '../../shared/models/spotify-track.model';
import { SpotifyTrackToTrackPipe } from '../../shared/pipes/spotify-track-to-track.pipe';


@Component({
    selector: 'new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.less']
})
export class NewPostComponent {
    post: Post;

    constructor(private location: Location,
                private trackPipe: SpotifyTrackToTrackPipe) {
        this.post = {} as Post;
    }

    goBack(): void {
        this.location.back();
    }

    onTrackSelection(spotifyTrack: SpotifyTrack) {
        let track = this.trackPipe.transform(spotifyTrack);
        this.post.track = track;
        console.log(track);
        console.log(this.post);
    }

}
