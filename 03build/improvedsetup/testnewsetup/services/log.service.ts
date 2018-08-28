import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    
    logs: Array<string> = []
    constructor() { }

    push(log: string){
        this.logs.push(log);
        console.log(this.logs)
    }

    pop(){
        return this.logs;
    }

}