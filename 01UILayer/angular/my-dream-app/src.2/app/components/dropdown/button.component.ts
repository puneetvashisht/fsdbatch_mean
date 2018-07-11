import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <button (click)="handleClick()" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{caption}}
    </button>
    `
})
export class ButtonComponent implements OnInit {

    @Input('caption') caption = "Select"
    @Output('buttonClick') buttonClick : EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit() { 

    }

    handleClick(){
        this.buttonClick.emit();
    }

}