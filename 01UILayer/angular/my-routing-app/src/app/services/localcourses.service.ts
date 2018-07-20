import { Injectable, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { Course } from '../course';


const STORAGE_KEY = 'my-courses';

@Injectable()
export class LocalCoursesService {
    
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


    addCourse(course: Course):Promise<any> {
        return new Promise((resolve,reject)=>{
           
            let courses: Array<Course> = this.storage.get(STORAGE_KEY) || [];
            courses.push(course);
            this.storage.set(STORAGE_KEY, courses);
            resolve({message: "Course successfully added"});
        });
    }

    fetchCourses(): Promise<any> {
        return new Promise((resolve,reject)=>{  
            let courses: Array<Course> = this.storage.get(STORAGE_KEY) || [];
            resolve(courses);
        });

       
    }

    deleteCourse(index:number){
        return new Promise((resolve,reject)=>{  
            let courses: Array<Course> = this.storage.get(STORAGE_KEY) || [];
            console.log('Fetched coures', courses);
            courses.splice(index, 1)
            this.storage.set(STORAGE_KEY, courses);
            console.log(courses);
            resolve({message: 'Course successfully deleted'});
        });
       
    }



}