import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  message: string = ''
  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit() {
  }

  addCategory(categoryName: string){
    console.log(categoryName);
    this.categoryService.addCategory({_id: null, categoryName: categoryName, createdDt: null})
    .then(res=>{
      console.log(res)
      this.message = res.message
    })
    .catch(err=>{
      var error = err.json()
      this.message = error.message;
    })



  }

}
