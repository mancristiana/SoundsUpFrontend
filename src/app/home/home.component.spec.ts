import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

@Component({selector: 'post-list', template: ''})
export class PostListStubComponent { }

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let title: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HomeComponent, PostListStubComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        title = fixture.debugElement.query(By.css('h1'));

        // Trigger initial data binding
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have a main title', () => {

        expect(title.nativeElement.textContent).toContain('Post page');
    });


});


