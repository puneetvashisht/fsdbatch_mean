import { Component } from '@angular/core';
import {Employee} from './employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emp1: Employee = new Employee(12, "Ravi", 34434.34);

  title: string = 'application';

  message: string = `I can only write a single line messages
  Trying two line gives me error ${this.title}`

 

 
}
