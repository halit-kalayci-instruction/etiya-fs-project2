import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AddOrUpdateCategoryComponent } from './pages/add-or-update-category/add-or-update-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
//11:00
@NgModule({
  declarations: [CategoryListComponent, AddOrUpdateCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CategoryModule {}
