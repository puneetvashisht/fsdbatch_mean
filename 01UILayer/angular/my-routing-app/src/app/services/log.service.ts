import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    localFlag: true;

    logs: Array<string> = []
    
    constructor() { }

    addLog(message: string){
        this.logs.push(message)
    }

    getLogs(){
        return this.logs
    }

}