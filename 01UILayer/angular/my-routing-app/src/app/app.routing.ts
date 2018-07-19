import { RouterModule, Routes } from '@angular/router';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
    { path: '', component: ViewCoursesComponent },
    { path: 'add', component: AddCourseComponent }
];

export const appRouting = RouterModule.forRoot(routes);