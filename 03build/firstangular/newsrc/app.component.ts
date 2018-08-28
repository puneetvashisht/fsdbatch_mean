import { Component, OnInit } from '@angular/core';
import {LogService} from './log.service'

@Component({
    selector: 'app-root',
    template: `
    <h2>Our second component -- changed</h2>
    <input type="text" #message (keyup)="0"/> {{message.value}}
    <button (click)= "doSomething(message.value)">Some action</button>
    `
})
export class AppComponent implements OnInit {

    constructor(private logService: LogService) { }

    doSomething(message: string){
        // console.log('doing something...');
        this.logService.push(message)
    }

    ngOnInit() { 

    }

}