import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'post-audio',
    templateUrl: './post-audio.component.html',
    styleUrls: ['./post-audio.component.less']
})
export class PostAudioComponent implements OnInit {
    @Input() trackUrl: String;
    audio: any;
    isPlaying: boolean = false;

    ngOnInit() {
        if (this.trackUrl) {
            this.audio = new Audio();
            this.audio.src = this.trackUrl;
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
