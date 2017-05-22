import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';
import { SpotifyTrackToTrackPipe } from './pipes/spotify-track-to-track.pipe';

@NgModule({
    providers: [ApiService],
    declarations: [
        SpotifyTrackToTrackPipe
    ],
    exports: [
        SpotifyTrackToTrackPipe
    ]
})
export class SharedModule {
}
