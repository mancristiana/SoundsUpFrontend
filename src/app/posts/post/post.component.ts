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

    ngAfterViewInit() {
        this.init.emit(null);
    }
}
