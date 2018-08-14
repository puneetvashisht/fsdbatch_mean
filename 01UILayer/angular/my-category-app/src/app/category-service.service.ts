import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from './category';

@Injectable()
export class CategoryServiceService {

  constructor(private http: Http) { }

  fetchCategories(): Promise<any>{
    return  this.http.get('http://localhost:3000/categories').toPromise()
    .then((res)=>res.json());
  }

  addCategory(catgory: Category): Promise<any>{
    return  this.http.post('http://localhost:3000/category', catgory).toPromise()
    .then((res)=>res.json());
  }
}
