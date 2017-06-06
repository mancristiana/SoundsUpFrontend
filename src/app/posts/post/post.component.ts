/**
 * Created by mancr on 18-May-17.
 */
import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/models/post.model';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.less']
})
export class PostComponent implements AfterViewInit {
    @Input() post: Post;
    @Output() init: EventEmitter<any> = new EventEmitter();
    isPlaying: boolean = false;
    audio: any;

    ngAfterViewInit() {
        this.init.emit(null);
        if(this.post.track.previewUrl) {
            this.audio = new Audio();
            this.audio.src = this.post.track.previewUrl;
        }
    }

    toggleAudio() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
    }

}
