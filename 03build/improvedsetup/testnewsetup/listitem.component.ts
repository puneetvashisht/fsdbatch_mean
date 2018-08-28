import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CountriesService} from './services/countries.service'

@Component({
    moduleId: module.id,
    selector: 'my-listitem',
    template: `
    <li (click)="handleClick()" class="list-group-item">{{text}}</li>
    `
})
export class ListItemComponent implements OnInit {

    @Input('text') text: string = ''
    @Output('captionSelected') captionSelected: EventEmitter<string> = new EventEmitter();


    handleClick(){
        console.log('clicked' + this.text)
        this.captionSelected.emit(this.text)
    }
    constructor(private countriesService: CountriesService){
        console.log('In List component')
     console.log(countriesService.getCountries());
    }  

    ngOnInit() { 

    }

}