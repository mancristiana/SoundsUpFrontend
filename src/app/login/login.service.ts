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
import { LoginComponent } from './login.component';

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
    private signInHandler: LoginComponent;

    constructor(private http: Http) {
    }

    public setSignInHandler(component: LoginComponent) {
        this.signInHandler = component;
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
        let token = googleUser.getAuthResponse().id_token;
        // YOUR CODE HERE
        this.verifyToken(token)
            .subscribe(
                t => console.log('TOKEN = ', t),
                err => console.log('ERROR = ', err)
            );


        // SHOW SOMETHING IN THE COMPONENT
        this.signInHandler.onSignIn(googleUser);
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
                console.log(loginService.googleIsSignedIn());
            });
        });
    }
}
