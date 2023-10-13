import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetAllProductModel } from '../../models/getAllProductModel';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: GetAllProductModel[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAll().subscribe((response) => {
      this.productList = response;
    });
  }
}
