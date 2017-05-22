/**
 * Created by mancr on 19-May-17.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Post } from '../../shared/models/post.model';
import { SpotifyTrack } from '../../shared/models/spotify-track.model';
import { SpotifyTrackToTrackPipe } from '../../shared/pipes/spotify-track-to-track.pipe';
import { Track } from '../../shared/models/track.model';
import { PostService } from '../post.service';
import { error } from 'util';


@Component({
    selector: 'new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.less']
})
export class NewPostComponent {
    post: Post;
    isSubmitted: boolean;
    isCancelled: boolean;
    errorMessage: string;

    constructor(private location: Location,
                private trackPipe: SpotifyTrackToTrackPipe,
                private postService: PostService) {

        this.post = {
            user: {
                id: 0 // TODO ADD ACTUAL USER
            },
            description: '',
            track: {}
        } as Post;

        this.isSubmitted = false;
        this.isCancelled = false;
        this.errorMessage = '';
    }

    onCancel(): void {
        this.isCancelled = true;
    }

    goBack() : void {
        this.location.back();
    }

    onTrackSelection(spotifyTrack: SpotifyTrack) {
        let track = {} as Track;
        if (spotifyTrack) {
            track = this.trackPipe.transform(spotifyTrack);
        }
        this.post.track = track;
    }

    onSubmit() {
        if (!this.isCancelled) {
            this.isSubmitted = true;
            this.postService.createPost(this.post).subscribe(
                (success) => this.goBack(),
                (error) => this.errorMessage = 'Sorry there was a problem with creating your post. Please try again in a few minutes.'
            );
        } else {
           this.goBack();
        }
    }

    isValidForm(): boolean {
        if (!this.post.track.name) {
            this.errorMessage = 'Please select a track';
        } else if (this.post.description === '') {
            this.errorMessage = 'Please enter your description';
        } else {
            this.errorMessage = '';
        }
        return this.errorMessage === '';
    }
}
