import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LogService} from './log.service'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [LogService]
})
export class AppModule { }