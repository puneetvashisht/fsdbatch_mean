import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow(){
    this.show = !this.show
  }

}
