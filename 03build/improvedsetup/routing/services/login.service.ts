import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    
    constructor(private _http: Http) { }

    authenticate(email:string, pwd:string){
        console.log('Login Service');
         return this._http.get('db/auth.json')
         .map((response: Response) => response.json() )
         .catch(this.handleError);
      }
            
    private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}