/**
 * Created by mancr on 3/12/2017.
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
declare const gapi: any;

@Injectable()
export class LoginService {

    private clientId = '176022414732-multinga95b6se0j9024vogb8t24rvge.apps.googleusercontent.com';
    private scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');

    public auth2: any;

    constructor(private http: Http) {
    }

    public googleInit(element) {
        let that = this;
        gapi.load('auth2', () => {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(element.nativeElement.firstChild);
        });
    }

    private attachSignin(element: any) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            (googleUser: any) => {
                let profile = googleUser.getBasicProfile();
                console.log('Token: ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                // YOUR CODE HERE
                that.verifyToken(googleUser.getAuthResponse().id_token)
                    .subscribe(
                        token => console.log('TOKEN = ', token),
                        err => console.log('ERROR = ', err)
                    );
            },
            (error: any) => {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    private verifyToken(token: string): Observable<any> {

        console.log('Verifying token');

        let apiUrl = 'http://localhost:8080/api/users';
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let body = JSON.stringify({id_token: token});
        console.log('BODY = ', body);

        return this.http.post(apiUrl, body, options)
            .map((res: Response) => {
                let b = res.json();
                console.log('Signed in as:' + b);
                return b.token_id || {};
            })
            .catch((err: Response | any) => {
                console.log('Something went wrong' + err);
                return err;
            });
    }
}
