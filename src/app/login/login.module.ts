/**
 * Created by mancr on 3/12/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [LoginService],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    bootstrap: []
})
export class LoginModule {
}
