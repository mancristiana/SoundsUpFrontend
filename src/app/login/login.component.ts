import { Component, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { LoginService } from './login.service';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('googleSignIn') signInButton: ElementRef;
    name: string;
    isSignedIn: boolean;

    constructor(private loginService: LoginService, private zone: NgZone) {
        this.isSignedIn = this.loginService.googleIsSignedIn();
    }

    ngAfterViewInit() {
        this.loginService.setSignInHandler(this);
        this.loginService.googleInit(this.signInButton.nativeElement);
    }

    public onSignIn(googleUser: any) {

        let profile = googleUser.getBasicProfile();
        // let token = googleUser.getAuthResponse().id_token;

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.zone.run(() => {
            this.name = profile.getName();
            console.log('zone name', this.name);
            this.isSignedIn = this.loginService.googleIsSignedIn();
            console.log('zone is signed in?', this.isSignedIn);
        });


    }

    public onSignOutClicked() {
        this.loginService.googleSignOut();
    }

    public onSignOut() {
        this.zone.run(() => {
            console.log('User signed out.');
            this.isSignedIn = this.loginService.googleIsSignedIn();
            console.log('zone Is logged in?: ', this.loginService.googleIsSignedIn());
        });
    }

}

