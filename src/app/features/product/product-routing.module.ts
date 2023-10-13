import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddOrUpdateCategoryComponent } from '../category/pages/add-or-update-category/add-or-update-category.component';
import { AddOrUpdateProductComponent } from './pages/add-or-update-product/add-or-update-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'index', component: ProductListComponent },
  { path: 'add', component: AddOrUpdateProductComponent },
  { path: 'update/:id', component: AddOrUpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
