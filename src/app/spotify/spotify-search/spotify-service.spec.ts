import { inject, TestBed } from '@angular/core/testing';
import { SpotifySearchService } from './spotify-search.service';
import { HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend } from '@angular/http';


describe('Spotify Search Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [SpotifySearchService]}
            );
    });
    describe('search()', () => {

        it('Spotify Api Url should be', inject([SpotifySearchService], (api) => {
            expect(api.spotifyApi).toBe('https://api.spotify.com/');

        }));

        it('Should return Observable<SpotifyTrack[]>',
            inject([SpotifySearchService], (searchService) => {
            searchService.search('avenged').subscribe((tracks)=>{
                expect(tracks.length).toBe(7);
            });

        }));
    });


});
