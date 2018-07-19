import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import {HttpModule, Http} from '@angular/http'

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
import { StorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

// let courseServiceFactory = (logger: LogService, http: Http, storageService :StorageService) => {
//   if(!logger.localFlag){
//     return new CoursesService(http);
//   }
//   else{
//     return new LocalCoursesService(storageService)
//   }
// };

@NgModule({
  declarations: [
    AppComponent, CardComponent, BadgeComponent, TopCoursesComponent, AddCourseComponent, ReversePipe, FilterCoursesPipe
  ],
  imports: [
    BrowserModule, HttpModule, StorageServiceModule
  ],
  providers: [CoursesService, LogService, LocalCoursesService
  //   {provide: CoursesService,
  //   useFactory: courseServiceFactory,
  //   deps: [LogService, Http]
  // }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
