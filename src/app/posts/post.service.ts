/**
 * Created by mancr on 17-May-17.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ApiService } from '../shared/services/api.service';
import { Post } from '../shared/models/post.model';


@Injectable()
export class PostService {

    constructor(private http: Http,
                private apiService: ApiService) {}

    public getAllPosts(): Observable<Post[]> {

        let endpointUrl = this.apiService.url + '/posts';

        return this.http.get(endpointUrl)
            .map((response: Response) => {
                return response.json() as Post[]
            })
            .catch(this.apiService.handleError);
    }

}
