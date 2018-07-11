import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  show: boolean = false;
  @Input('buttonCaption') buttonCaption: string = 'Select Courses!!'
  @Input('listValues') courses: Array<string> = []

  constructor() { }

  ngOnInit() {
  }

  toggleShow(){
    this.show = !this.show
  }

  selectCourse(course: string){
    console.log(course)
    this.buttonCaption = course
    this.show = false
  }

}
