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
    counter = 0;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getAllPosts()
            .subscribe(
                (posts) => {
                    this.posts = posts;
                },
                (error) => console.log(error)
            );
    }

    onItemReady() {
        this.counter++;
        if(this.counter === this.posts.length) {
            this.loadMasonry();
        }
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


        // Hack masonry images not loaded
        let count = 0;
        let interval = setInterval(()=> {
            if(count === 5) {
                clearInterval(interval);
            } else {
                this.updateMasonry();
                count++;
            }
        }, 1000);

    }

    updateMasonry() {
        this.masonry.layout();
    }

}
