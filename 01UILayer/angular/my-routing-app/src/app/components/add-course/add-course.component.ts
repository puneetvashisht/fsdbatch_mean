import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { LocalCoursesService } from '../../services/localcourses.service';
import { Course } from '../../course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  message: string = ''

    constructor(private courseService: CoursesService, private localCourseService: LocalCoursesService) { }

    ngOnInit() {

    }

    addCourse(title: string, summary: string){
        console.log(title, summary);
        // create object of course and do http call
        let course = new Course(title, summary);

        // this.courseService.addCourse(course)
        // .then(data=>{
        //     console.log(data)
        //     this.message = data.message;
        // });
        this.localCourseService.addCourse(course)
        .then(data=>{
            console.log(data)
            this.message = data.message;
        });

    }

}
