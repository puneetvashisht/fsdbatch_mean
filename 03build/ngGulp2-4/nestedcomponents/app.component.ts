import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  moduleId: module.id,    
  selector: 'my-app',
  template: ` 
  
    <h1 test> Test</h1>
  
  
  
  `,
  // directives: [ChildDirective, ChildComponent] 
  //Previous versions of Angular 2.. 
  // directives: []

  // Newer versions
  // 1. @NgModule -- Declarations
  // 2. Use them by the selector : <div [colorme]>
})
export class AppComponent  { 
    

}
