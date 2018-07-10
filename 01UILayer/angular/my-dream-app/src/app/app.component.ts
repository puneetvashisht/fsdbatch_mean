import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'My title';
  courses: Array<string> = ['Angular', 'React', 'Ember']
  pizzas: Array<string> = ['Cheese', 'Corn', 'Magaretta']

}
