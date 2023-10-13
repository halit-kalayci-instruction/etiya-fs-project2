import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddOrUpdateProductComponent } from './pages/add-or-update-product/add-or-update-product.component';

@NgModule({
  declarations: [ProductListComponent, AddOrUpdateProductComponent],
  imports: [CommonModule, ProductRoutingModule, TranslateModule],
})
export class ProductModule {}
