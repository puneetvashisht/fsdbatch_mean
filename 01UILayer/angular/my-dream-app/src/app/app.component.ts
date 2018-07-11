import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = 'My title';
  courses: Array<Course> = []

  constructor(private http: Http){

  }

  ngOnInit(){
    console.log('Do initialization stuff here')
    this.http.get('http://localhost:4200/assets/dummy.json').toPromise()
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.courses = data
    })
  }

}
