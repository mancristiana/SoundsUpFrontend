import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post';

import * as masonry from 'masonry-layout';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
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
