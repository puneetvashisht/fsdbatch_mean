import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { TopCoursesComponent } from './components/topcourses.component';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card.component';
import { CoursesService } from './services/courses.service';
import { LogService } from './services/log.service';
import { LocalCoursesService } from './services/localcourses.service';
import { HttpModule } from '@angular/http';
import { StorageServiceModule } from 'angular-webstorage-service';

// import  appRouting  from './app.routing';

const routes: Routes = [
  { path: '', component: ViewCoursesComponent },
  { path: 'add', component: AddCourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewCoursesComponent,
    AddCourseComponent,
    CardComponent, BadgeComponent, TopCoursesComponent, AddCourseComponent, ReversePipe, FilterCoursesPipe
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(routes),HttpModule, StorageServiceModule
  ],
  providers: [CoursesService, LogService, LocalCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
