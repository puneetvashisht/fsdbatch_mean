import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import { CategoryServiceService } from '../category-service.service';
import { Category } from '../category';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryServiceService) { }

  categories: Array<Category> = [] 
  ngOnInit() {
    this.categoryService.fetchCategories()
    .then(data => this.categories = data);
  }

}
