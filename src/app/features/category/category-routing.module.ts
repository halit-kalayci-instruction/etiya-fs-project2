import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AddOrUpdateCategoryComponent } from './pages/add-or-update-category/add-or-update-category.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent, pathMatch: 'full' },
  { path: 'add', component: AddOrUpdateCategoryComponent, pathMatch: 'full' },
  {
    path: 'update/:id',
    component: AddOrUpdateCategoryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
