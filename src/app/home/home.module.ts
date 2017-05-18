/**
 * Created by mancr on 18-May-17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { PostComponent } from './post/post.component';
import { PostService, ApiService } from '../shared';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        PostService,
        ApiService
    ],
    declarations: [
        HomeComponent,
        PostComponent
    ],
    exports: [HomeComponent],
    bootstrap: []
})
export class HomeModule {
}
