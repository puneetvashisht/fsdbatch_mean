import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

// import  appRouting  from './app.routing';

const routes: Routes = [
  { path: '', component: ViewCoursesComponent },
  { path: 'add', component: AddCourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewCoursesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
