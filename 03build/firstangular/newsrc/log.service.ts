import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    logs: Array<string> = []
    
    push(message: string){
        this.logs.push(message);
        console.log(this.logs)
    }
    pop(){
        return this.logs
    }

    constructor() { }

}