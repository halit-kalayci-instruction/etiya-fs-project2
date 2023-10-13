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
    data: { title: 'Etiya - Kategoriler' },
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./features/chat/chat.module').then((m) => m.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
