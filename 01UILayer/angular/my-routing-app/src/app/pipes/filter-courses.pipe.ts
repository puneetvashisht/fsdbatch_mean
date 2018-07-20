import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: Array<Course>, searchedCourse: string): Array<Course> {
    console.log('Filter Courses Component', courses)
    if(courses){
      let searchedCourses: Array<Course> = courses.filter((course) => course.title.includes(searchedCourse)); 
      return searchedCourses;
      // return null;
    }
    return null;
  }

}
