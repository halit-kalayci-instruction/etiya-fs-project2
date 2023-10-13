import { Component, OnInit } from '@angular/core';
import { GetAllCategoryModel } from 'src/app/features/category/models/getAllCategoryModel';
import { CategoryService } from 'src/app/features/category/services/category.service';
import { GetAllProductModel } from 'src/app/features/product/models/getAllProductModel';
import { ProductService } from 'src/app/features/product/services/product.service';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  productList: GetAllProductModel[] = [];
  categoryList: GetAllCategoryModel[] = [];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categoryList = response;
    });
    this.productService.getAll().subscribe((response) => {
      this.productList = response;
    });
  }
}
