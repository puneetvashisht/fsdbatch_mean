import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login.component'
import {ProfileComponent} from './components/profile.component'
import {Routes, RouterModule} from '@angular/router'
import {LoginService} from './services/login.service'
import {HttpModule} from '@angular/http'


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [ BrowserModule, routing, HttpModule ],
    declarations: [ AppComponent,  LoginComponent,ProfileComponent],
    bootstrap:    [ AppComponent ],
    providers: [LoginService]
})
export class AppModule { }