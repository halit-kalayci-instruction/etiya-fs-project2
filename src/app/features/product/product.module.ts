import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddOrUpdateProductComponent } from './pages/add-or-update-product/add-or-update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, AddOrUpdateProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
