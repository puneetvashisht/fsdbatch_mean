import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'add-course',
    template: `
        <h2>Add Course Component</h2>
        <div *ngIf="message != ''" class="alert alert-success" role="alert">
            {{message}}
        </div>


        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Course Title</span>
        </div>
        <input #title (change)="0" type="text" class="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Course Summary</span>
        </div>
        <input #summary (change)="0" type="text" class="form-control" placeholder="Enter Summary" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <button (click)="addCourse(title.value, summary.value)" type="button" class="btn btn-primary">Add Course</button>
    `
})
export class AddCourseComponent implements OnInit {

    message: string = ''

    constructor(private courseService: CoursesService) { }

    ngOnInit() {

    }

    addCourse(title: string, summary: string){
        console.log(title, summary);
        // create object of course and do http call
        let course = new Course(title, summary);

        this.courseService.addCourse(course)
        .then(data=>{
            console.log(data)
            this.message = data.message;
        });

    }

}