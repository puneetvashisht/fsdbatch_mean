import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../course';

@Injectable()
export class CoursesService {
    
    constructor(private http: Http) { }

    fetchCourses(): Promise<any> {
        return this.http.get('http://localhost:4200/assets/dummy.json').toPromise()
        .then(res => res.json())  
    }

    addCourse(course: Course):Promise<any> {
        return this.http.post('http://localhost:4200/assets/dummy.json', course).toPromise()
        .then(res => res.json())  
    }

}