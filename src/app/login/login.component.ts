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
        this.loginService.googleInit(this.signInButton.nativeElement);
    }

    onSignOut() {

        console.log('DETAILS');
        this.loginService.printUserDetails();
        console.log('Is logged in?: ', this.loginService.googleIsSignedIn());
        console.log('On sign out');
        this.loginService.googleSignOut();
        console.log('Is logged in?: ', this.loginService.googleIsSignedIn());
    }

}

