/**
 * Created by mancr on 3/12/2017.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { SpotifySearchService } from './spotify-search/spotify-search.service';

import { SpotifySearchComponent } from './spotify-search/spotify-search.component';
import { SpotifyTrackSelectorComponent } from './spotify-track-selector/spotify-track-selector.component';
import { SpotifyTrackListComponent } from './spotify-track-list/spotify-track-list.component';
import { SpotifyTrackComponent } from './spotify-track/spotify-track.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [SpotifySearchService],
    declarations: [
        SpotifySearchComponent,
        SpotifyTrackListComponent,
        SpotifyTrackComponent,
        SpotifyTrackSelectorComponent
    ],
    exports: [
        SpotifySearchComponent,
        SpotifyTrackSelectorComponent
    ],
    bootstrap: []
})
export class SpotifyModule {
}
