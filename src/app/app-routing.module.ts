import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Angular Lazy Loading

const routes: Routes = [
  // /product ve sonrasını tamamen productmodule yönetsin..
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./features/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
