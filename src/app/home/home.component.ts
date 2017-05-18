import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post';
declare var Masonry: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('masonry') masonry: ElementRef;
    masonryGrid;
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

    ngAfterViewInit() {
       setTimeout(()=> {
           this.loadMasonry();
       }, 3000);
    }

    loadMasonry() {
        console.log("LOAD MASONRY");

        this.masonryGrid = new Masonry(this.masonry.nativeElement, {
            // options
            itemSelector: '.masonry-item',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

}
