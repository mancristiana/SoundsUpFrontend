import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostModule } from './posts/post.module';
import { SpotifyTrackToTrackPipe } from './shared/pipes/spotify-track-to-track.pipe';
import { ApiService } from './shared/services/api.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        SpotifyTrackToTrackPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        LoginModule,
        PostModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
