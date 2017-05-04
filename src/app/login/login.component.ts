import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { LoginService } from './login.service';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit {

    constructor(private element: ElementRef, private loginService: LoginService) {
        console.log('ElementRef: ', this.element);
    }

    ngAfterViewInit() {
        this.loginService.googleInit(this.element);
    }

}

