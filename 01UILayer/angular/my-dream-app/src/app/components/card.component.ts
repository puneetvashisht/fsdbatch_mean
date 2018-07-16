import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {

    constructor(private courseService: CoursesService) { }

    @Input('title') title : string = 'Default'
    @Input('summary') summary : string = 'Default Summary'
    @Input('index') index : number;

    ngOnInit() { 

    }

    deleteCourse(index: number){
        this.courseService.deleteCourse(index)
        .then(data => console.log(data));
    }

}