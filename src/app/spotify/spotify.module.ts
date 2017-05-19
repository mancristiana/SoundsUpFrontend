/**
 * Created by mancr on 3/12/2017.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { SpotifySearchService } from './spotify-search/spotify-search.service';
import { SpotifySearchComponent } from './spotify-search/spotify-search.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [SpotifySearchService],
    declarations: [SpotifySearchComponent],
    exports: [SpotifySearchComponent],
    bootstrap: []
})
export class SpotifyModule {
}
