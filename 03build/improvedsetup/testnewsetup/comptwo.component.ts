import { Component, OnInit } from '@angular/core';
import {LogService} from './services/log.service'
@Component({
    moduleId: module.id,
    selector: 'my-comptwo',
    template: `
       {{logs}}
    `
})
export class CompTwoComponent implements OnInit {
    
    logs: Array<string> = []
    

    constructor(private logService: LogService) {
        this.logs = logService.pop();
     }

    ngOnInit() { 

    }

}