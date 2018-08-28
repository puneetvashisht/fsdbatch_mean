import { Component, OnInit } from '@angular/core';
import {LogService} from './services/log.service'
@Component({
    moduleId: module.id,
    selector: 'my-compone',
    template: `
        <input type="text" placeholder="type log message" #message (blur)=0/>{{message.value}}
        <button (click)="logMessage(message.value)">Log Message</button>
    `,
    providers: [LogService]
})
export class CompOneComponent implements OnInit {

    logMessage(message:string){
        //Call service
        this.logService.push(message)
    }

    constructor(private logService: LogService) { }

    ngOnInit() { 

    }

}