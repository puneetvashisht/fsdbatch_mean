import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { BadgeComponent } from './components/badge.component';
import { TopCoursesComponent } from './components/topcourses.component';
import { CoursesService } from './services/courses.service';
import { LogService } from './services/log.service';
import { AddCourseComponent } from './components/addcourse.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalCoursesService } from './services/localcourses.service';

@NgModule({
  declarations: [
    AppComponent, CardComponent, BadgeComponent, TopCoursesComponent, AddCourseComponent, ReversePipe, FilterCoursesPipe
  ],
  imports: [
    BrowserModule, HttpModule, StorageServiceModule
  ],
  providers: [CoursesService, LogService, LocalCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
