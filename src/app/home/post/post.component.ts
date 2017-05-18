/**
 * Created by mancr on 18-May-17.
 */
import { Component, Input } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less']
})
export class PostComponent {
    @Input() post: Post;

    constructor() {}

}
