import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ListItemComponent } from './listitem.component';
import { CompOneComponent } from './compone.component';
import { CompTwoComponent } from './comptwo.component';
import {ReversePipe} from './reverse.pipe'
import {LimitPipe} from './limit.pipe'
import {CountriesService} from './services/countries.service'
import {LogService} from './services/log.service'



@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent,ReversePipe, LimitPipe, ListItemComponent,  CompOneComponent, CompTwoComponent],
    bootstrap:    [ AppComponent ],
    providers: [CountriesService]
})
export class AppModule { }