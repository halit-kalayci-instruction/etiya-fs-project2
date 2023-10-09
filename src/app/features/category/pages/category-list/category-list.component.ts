import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { GetAllCategoryModel } from '../../models/getAllCategoryModel';

@Component({
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categoryList: GetAllCategoryModel[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categoryList = response;
    });
  }
}
