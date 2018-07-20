import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { LocalCoursesService } from '../services/localcourses.service';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {

    constructor(private courseService: CoursesService, private localCourseService: LocalCoursesService) { }

    @Input('title') title : string = 'Default'
    @Input('summary') summary : string = 'Default Summary'
    @Input('index') index : number;
    @Output('messageRecieved') messageRecieved :EventEmitter<string>= new EventEmitter(); 

    ngOnInit() { 

    }

    deleteCourse(index: number){
        this.localCourseService.deleteCourse(index)
        .then(data => {
            // we have a problem now.. 
            // data comes here... but message to be show in parent component
            // can you guys suggest me something
            console.log(data)
            // console.log(data.message);
            // this.message = data.message
            // this.messageRecieved.emit(data.message)
        });
    }

}