/**
 * Created by mancr on 3/12/2017.
 *
 * References: https://developers.google.com/identity/sign-in/web/reference#top_of_page
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare const gapi: any;

@Injectable()
export class LoginService {

    private clientConfig = {
        client_id: '176022414732-multinga95b6se0j9024vogb8t24rvge.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        scope: [
            'profile',
            'email',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/contacts.readonly',
            'https://www.googleapis.com/auth/admin.directory.user.readonly'
        ].join(' ')
    };

    private googleAuth: any;
    public googleUser: any;


    constructor(private http: Http) {
    }

    public googleInit(element) {
        // Store reference of loginService to avoid scoping issues
        let loginService = this;
        gapi.load('auth2', () => {
            loginService.googleAuth = gapi.auth2.init(loginService.clientConfig);

            // GoogleAuth.attachClickHandler(container, options, onsuccess, onfailure)
            loginService.googleAuth.attachClickHandler(element, {},
                loginService.googleSignIn.bind(loginService),
                loginService.handleError
            );
        });
    }

    private googleSignIn(googleUser: any) {

        this.googleUser = googleUser;

        console.log(this.googleUser);
        let profile = googleUser.getBasicProfile();
        let token = googleUser.getAuthResponse().id_token;

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // YOUR CODE HERE
        this.verifyToken(token)
            .subscribe(
                t => console.log('TOKEN = ', t),
                err => console.log('ERROR = ', err)
            );
    }

    public printUserDetails() {
        let googleUser = this.googleUser;

        let profile = googleUser.getBasicProfile();

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }


    private verifyToken(token: string): Observable<any> {
        console.log('Verifying token = ', token);

        let apiUrl = 'http://localhost:8080/api/users';
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let body = JSON.stringify({id_token: token});

        return this.http.post(apiUrl, body, options)
            .map((res: Response) => {
                let b = res.json();
                console.log('Signed in as:' + b);
                return b.token_id || {};
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('Something went wrong');
        console.log(JSON.stringify(error, undefined, 2));
        return error;
    }

    public googleIsSignedIn() {
        return this.googleUser.isSignedIn();
    }

    public googleSignOut() {
        let loginService = this;
        gapi.load('auth2', () => {
            loginService.googleAuth = gapi.auth2.getAuthInstance();
            loginService.googleAuth.signOut().then(() => {
                console.log('User signed out.');
                loginService.printUserDetails();
                console.log(loginService.googleIsSignedIn());
            });
        });
    }
}
