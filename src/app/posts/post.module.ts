import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { ApiService } from '../shared';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        PostService,
        ApiService
    ],
    // Make components, directives available inside post module
    declarations: [PostListComponent, PostComponent],

    // Make components, directives, pipes available outside post module
    exports: [PostListComponent],
    bootstrap: []
})
export class PostModule {}
