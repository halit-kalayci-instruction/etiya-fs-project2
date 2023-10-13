import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { GetAllCategoryModel } from '../../models/getAllCategoryModel';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categoryList: GetAllCategoryModel[] = [];
  categoryToDelete!: GetAllCategoryModel | null;
  constructor(private categoryService: CategoryService, private title: Title) {}
  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categoryList = response;
    });
  }

  setCategoryToDelete(model: GetAllCategoryModel) {
    this.categoryToDelete = model;
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe((response) => {
      this.fetchCategories();
      this.categoryToDelete = null;
    });
  }
}
