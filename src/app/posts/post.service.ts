/**
 * Created by mancr on 17-May-17.
 */

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ApiService } from '../shared/services/api.service';
import { Post } from '../shared/models/post.model';


@Injectable()
export class PostService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = this.apiService.url + '/posts';

    constructor(private http: Http,
                private apiService: ApiService) {}

    public getAllPosts(): Observable<Post[]> {

        return this.http.get(this.url)
            .map((response: Response) => {
                return response.json() as Post[]
            })
            .catch(this.apiService.handleError);
    }

    public createPost(post: Post): Observable<any> {
        let body = JSON.stringify(post);
        let options = new RequestOptions({
            headers: this.headers
        });

        return this.http.post(this.url, body, options)
            .map((response: Response) => {
                let responseMessage = response.json();
                console.log(response);
                console.log(responseMessage);

                return responseMessage;
            })
            .catch(this.apiService.handleError);
    }

}
