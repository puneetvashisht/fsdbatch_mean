import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ust-badge',
    template: `
    <button (click)="incrementCount()" class="btn btn-primary" type="button">
        {{caption}} <span class="badge">{{count}}</span>
    </button>
    `
})
export class BadgeComponent implements OnInit {

    constructor() { }

    count: number = 34
    @Input('caption') caption: string = 'Default'
    @Output('captureCaption') captureCaption: EventEmitter<string>  = new EventEmitter();

    incrementCount(){
        this.count++;
        this.captureCaption.emit(this.caption);
    }

    ngOnInit() { 

    }

}