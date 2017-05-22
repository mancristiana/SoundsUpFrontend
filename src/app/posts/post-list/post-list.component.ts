/**
 * Created by mancr on 19-May-17.
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as masonry from 'masonry-layout';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../post.service';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
    @ViewChild('masonryElementRef') masonryElementRef: ElementRef;
    masonry: any;
    masonryOptions;
    posts: Post[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getAllPosts()
            .subscribe(
                (posts) => {
                    this.posts = posts;
                    console.log("Got posts");
                },
                (error) => console.log(error)
            );
    }

    loadMasonry() {
        // Create masonry options object
        this.masonryOptions = {
            itemSelector: '.masonry-item',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        // Initialize Masonry
        this.masonry = new masonry(this.masonryElementRef.nativeElement, this.masonryOptions);

        setTimeout(() => {
            this.masonry.layout();
        });

    }


}
