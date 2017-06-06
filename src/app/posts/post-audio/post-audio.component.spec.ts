import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { PostAudioComponent } from './post-audio.component';
import { DebugElement } from '@angular/core';

describe('PostAudioComponent', () => {
    let component: PostAudioComponent;
    let fixture: ComponentFixture<PostAudioComponent>;
    let buttonElement: DebugElement;
    let iconElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostAudioComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostAudioComponent);
        component = fixture.componentInstance;
        buttonElement = fixture.debugElement.query(By.css('button'));
        iconElement = fixture.debugElement.query(By.css('span'));

        // Set input value as if it were supplied from post component
        component.trackUrl = "https://p.scdn.co/mp3-preview/81c7344f7fdf58bf02ee2d832d82e5f3156b2ef7?cid=null";

        // Trigger initial data binding
        fixture.detectChanges();
    });

    afterEach(() => {
        component.audio.pause();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should create audio', () => {
        expect(component.audio).toBeTruthy();
    });

    it('should set audio source to be trackUrl', () => {
        expect(component.audio.src).toBe(component.trackUrl);
    });

    describe('toggleAudio()', () => {
        it('should toggle isPlaying from false to true', () => {
            component.isPlaying = false;
            component.toggleAudio();
            expect(component.isPlaying).toBeTruthy();
        });

        it('should toggle isPlaying from true to false', () => {
            component.isPlaying = true;
            component.toggleAudio();
            expect(component.isPlaying).toBeFalsy();
        });

        it('should play audio', () => {
            component.isPlaying = false;
            component.audio.pause();
            component.toggleAudio();
            expect(component.audio.isPaused).toBeFalsy();
        });

        it('should pause audio', () => {
            component.isPlaying = true;
            component.audio.play();
            component.toggleAudio();
            expect(component.audio.isPlaying).toBeFalsy();
        });
    });

    describe('Template', () => {

        it('should call toggleAudio event when clicked', () => {
            component.isPlaying = true;
            buttonElement.triggerEventHandler('click', null);
            expect(component.isPlaying).toBeFalsy();
        });

        it('should show play icon when paused', () => {
            component.isPlaying = false;
            fixture.detectChanges();
            expect(iconElement.nativeElement.classList).toContain('glyphicon-play');
        });

        it('should show pause icon when playing', () => {
            component.isPlaying = true;
            fixture.detectChanges();
            expect(iconElement.nativeElement.classList).toContain('glyphicon-pause');
        });
    });

});


