import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Http } from '@angular/http';
import { CoursesService } from './services/courses.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit{

  title: string = 'My title';
  courses: Array<Course> = []
  today : Date = new Date();

  logs:Array<string>= []

  constructor(private http: Http, private courseService: CoursesService, private logService: LogService){

  }

  ngOnInit(){

    this.logService.addLog('In Init method of App Component')

    console.log('Do initialization stuff here')
    this.courseService.fetchCourses()
    .then(data => {
      console.log(data);
      this.courses = data
    })
  }

  fetchLogs(){
    this.logs = this.logService.getLogs();
  }

}