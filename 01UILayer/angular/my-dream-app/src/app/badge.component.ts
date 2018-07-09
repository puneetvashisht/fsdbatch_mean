import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `
    <button  (click)="incrementCount()" type="button" class="btn btn-primary">
        {{caption}} <span class="badge badge-light">{{count}}</span>
    </button>
    `
})
export class BadgeComponent   {

    @Input('caption') caption: string = ""
    @Input('count') count: number = 0

    incrementCount(): void {
        this.count++;
        console.log('Button clicked...')
    }

    constructor() { }

}