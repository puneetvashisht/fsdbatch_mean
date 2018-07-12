import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Course } from '../course';
import { CoursesService } from '../services/courses.service';
import { LogService } from '../services/log.service';

@Component({
    selector: 'app-topcourses',
    template: `
        <h2>Top Courses<h2>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let course of courses">{{course.title}}</li>
        </ul>
    `
    // providers: [LogService]
})
export class TopCoursesComponent implements OnInit {

    courses: Array<Course> = []

    constructor(private http: Http,  private courseService: CoursesService, private logService: LogService) { }

    ngOnInit() { 
       this.logService.addLog('In Init method of Top Courses')

       this.courseService.fetchCourses()
        .then(data => {
          console.log(data);
          this.courses = data.slice(0,3);
        })

    }

}