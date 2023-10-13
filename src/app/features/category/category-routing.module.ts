import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AddOrUpdateCategoryComponent } from './pages/add-or-update-category/add-or-update-category.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'add', component: AddOrUpdateCategoryComponent },
  {
    path: 'update/:id',
    component: AddOrUpdateCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
