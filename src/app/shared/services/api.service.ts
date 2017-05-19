import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    public url = 'https://sounds-up-api.herokuapp.com/api';
    // public url = 'http://localhost:8080/api';

    constructor() {}

    public handleError(error: any) {
        console.log('Something went wrong');
        console.log(JSON.stringify(error, undefined, 2));
        return error;
    }
}
