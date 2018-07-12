import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    logs: Array<string> = []
    
    constructor() { }

    addLog(message: string){
        this.logs.push(message)
    }

    getLogs(){
        return this.logs
    }

}