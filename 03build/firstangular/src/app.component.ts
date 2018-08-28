import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h3>Our First Angular Component</h3>
            <hr/>
            <p>From child component badge, we recive the caption as {{caption}}</p>
            <ust-badge *ngFor="let title of titles" [caption]="title" (captureCaption)=handleCaptureCaption($event)></ust-badge>
           </div>
    `
})
export class AppComponent {

    titles: any = ['Spam', 'Inbox', 'Sent', 'Work']
    message: string = "Some Message"
    constructor() { }
    caption : string = ''

    handleCaptureCaption(title: string){
        console.log('In the outer component', title)
        this.caption = title
    }

     /*   */

}