import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { PostAudioComponent } from './post-audio.component';
import { DebugElement } from '@angular/core';

describe('PostAudioComponent', () => {
    let component: PostAudioComponent;
    let fixture: ComponentFixture<PostAudioComponent>;
    let audioElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostAudioComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostAudioComponent);
        component = fixture.componentInstance;
        audioElement = fixture.debugElement.query(By.css('h1'));

        // Set input value as if it were supplied from post component
        component.trackUrl = "https://p.scdn.co/mp3-preview/81c7344f7fdf58bf02ee2d832d82e5f3156b2ef7?cid=null";

        // Trigger initial data binding
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('audio should be created', () => {
        expect(component).toBeTruthy();
    });

    // it('is playing should be initialized with', () => {
    //     expect(component).toBeTruthy();
    // });
    //
    // it('should pause audio if is playing', () => {
    //     // component.toggleAudio()
    // });

    //     it('should have <my-home>', function () {
//         var home = element(by.css('my-app my-home'));
//         expect(home.isPresent()).toEqual(true);
//         expect(home.getText()).toEqual("Home Works!");
//     });

});


