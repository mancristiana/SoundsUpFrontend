import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostService } from './post.service';
import { SpotifyModule } from '../spotify/spotify.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SpotifyModule,
        SharedModule
    ],
    providers: [
        PostService
    ],
    // Make components, directives available inside post module
    declarations: [
        PostListComponent,
        PostComponent,
        NewPostComponent
    ],
    // Make components, directives, pipes available outside post module
    exports: [
        PostListComponent,
        NewPostComponent
    ],
    bootstrap: []
})
export class PostModule {}
