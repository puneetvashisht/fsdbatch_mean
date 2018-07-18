import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../course';

@Injectable()
export class CoursesService {
    
    constructor(private http: Http) { }

    baseUrl: string = 'http://localhost:3000/courses/'

    // fetchCourses(): Promise<any> {
    //     // return this.http.get(this.baseUrl).toPromise()
    //     return this.http.get(this.baseUrl).toPromise()
    //     .then(res => res.json())  
    // }

    addCourse(course: Course):Promise<any> {
        return this.http.post(this.baseUrl, course).toPromise()
        .then(res => res.json())  
    }

    // http://localhost:3000/courses/3
    deleteCourse(index:number){
        return this.http.delete(this.baseUrl+ index).toPromise()
        .then(res => res.json())  
    }

}
