import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './login.service';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('googleSignIn') signInButton: ElementRef;

    constructor(private loginService: LoginService) {}

    ngAfterViewInit() {
        this.loginService.setSignInHandler(this);
        this.loginService.googleInit(this.signInButton.nativeElement);
    }

    public onSignIn(googleUser: any) {

        let profile = googleUser.getBasicProfile();
        let token = googleUser.getAuthResponse().id_token;

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }


    onSignOut() {

        console.log('DETAILS');

        console.log('Is logged in?: ', this.loginService.googleIsSignedIn());
        console.log('On sign out');
        this.loginService.googleSignOut();
        console.log('Is logged in?: ', this.loginService.googleIsSignedIn());
    }

}

