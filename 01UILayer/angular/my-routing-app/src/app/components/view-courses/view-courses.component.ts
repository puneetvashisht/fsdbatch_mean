import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { Http } from '@angular/http';
import { CoursesService } from '../../services/courses.service';
import { LocalCoursesService } from '../../services/localcourses.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  title: string = 'My title';
  courses: Array<Course> = []
  today : Date = new Date();
  message: string = ''

  logs:Array<string>= []

  constructor(private http: Http, private courseService: CoursesService,  private localCourseService: LocalCoursesService, private logService: LogService){

  }

  ngOnInit(){

    this.logService.addLog('In Init method of App Component')

    console.log('Do initialization stuff here')
    this.localCourseService.fetchCourses()
    .then(data => {
      console.log(data);
      this.courses = data
   // not here
    })
  }

  fetchLogs(){
    this.logs = this.logService.getLogs();
  }

  handleMessageRecieved(message: string){
    console.log('In parent component: ', message);
    this.message = message;
    //Lets see now... should be working
  }
}
