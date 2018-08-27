import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TestDirective} from './test.directive'
import {HttpModule} from '@angular/http'


@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, TestDirective ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }