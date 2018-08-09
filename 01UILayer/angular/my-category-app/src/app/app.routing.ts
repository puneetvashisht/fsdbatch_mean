import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
    { path: '', component: ViewCategoriesComponent },
    { path: 'add', component: AddCategoryComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);