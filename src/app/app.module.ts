import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
