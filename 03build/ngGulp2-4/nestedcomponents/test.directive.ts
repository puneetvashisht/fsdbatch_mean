import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: '[test]'
})
export class TestDirective{

    @HostListener('mouseenter') mouseover() {
        console.log('Mouse Enter event')      
    };

    @HostListener('mouseleave') mouseleave() {
        console.log('Mouse Enter event')
        
    };

}