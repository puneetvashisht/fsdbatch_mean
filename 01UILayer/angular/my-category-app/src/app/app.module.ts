import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import {appRouting} from './app.routing'
import { CategoryServiceService } from './category-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ViewCategoriesComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,appRouting,HttpModule
  ],
  providers: [CategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
