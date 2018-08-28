import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import { Observable } from 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'login',
    template: `
        
    <div class="container">



        <h2 class="form-signin-heading">Please sign in</h2>

        <div>{{errorMessage}}<div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus #email (blur)="0">{{email.value}}
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required #pwd (blur)="0">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" (click)="authenticate(email.value, pwd.value)">Sign in</button>


    </div>

    `
})
export class LoginComponent implements OnInit {

    errorMessage: string = ''


    authenticate(email: string, pwd: string){
        console.log(email);
        console.log(pwd);
       
        this.loginService.authenticate(email,pwd)
        .subscribe((data)=>{
             console.log(data);

             if(data.success){
                 //this.router.naviate(['profile])
                 this.router.navigate(['/profile']);
             }
             else{
                 this.errorMessage = 'Invalid user/password!!'
             }
         })
    }

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() { 

    }

}