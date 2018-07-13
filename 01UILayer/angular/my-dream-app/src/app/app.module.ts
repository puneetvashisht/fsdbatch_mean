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

@NgModule({
  declarations: [
    AppComponent, CardComponent, BadgeComponent, TopCoursesComponent, AddCourseComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CoursesService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
