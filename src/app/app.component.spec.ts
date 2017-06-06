import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginModule } from './login/login.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                LoginModule
            ],
            declarations: [
                AppComponent,
                AppHeaderComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should contain <app-header>`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const appHeader = fixture.debugElement.query(By.css('app-header'));
      expect(appHeader).toBeTruthy();
    }));

    it(`should contain <router-outlet>`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const appRouterOutlet = fixture.debugElement.query(By.css('router-outlet'));
        expect(appRouterOutlet).toBeTruthy();
    }));
});
