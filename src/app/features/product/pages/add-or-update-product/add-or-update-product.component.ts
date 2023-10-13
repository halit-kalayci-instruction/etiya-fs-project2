import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from 'src/app/features/category/services/category.service';
import { GetAllCategoryModel } from 'src/app/features/category/models/getAllCategoryModel';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductModel } from '../../models/getProductModel';

@Component({
  templateUrl: './add-or-update-product.component.html',
  styleUrls: ['./add-or-update-product.component.css'],
})
export class AddOrUpdateProductComponent {
  addProductForm!: FormGroup;
  categories: GetAllCategoryModel[] = [];
  productToUpdate!: GetProductModel;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getById(params['id']).subscribe((response) => {
          this.productToUpdate = response;
          this.buildForm();
        });
      } else {
        this.buildForm();
      }
    });
    this.fetchCategories();
  }
  buildForm() {
    if (!this.productToUpdate)
      this.addProductForm = this.formBuilder.group({
        categoryId: new FormControl(0, [Validators.required]),
        stock: new FormControl(0, [Validators.required, Validators.min(1)]),
        unitPrice: new FormControl(0, [Validators.required, Validators.min(1)]),
        name: new FormControl('', [Validators.required]),
      });
    else
      this.addProductForm = this.formBuilder.group({
        id: new FormControl(this.productToUpdate.id, []),
        categoryId: new FormControl(this.productToUpdate.categoryId, [
          Validators.required,
        ]),
        stock: new FormControl(this.productToUpdate.stock, [
          Validators.required,
          Validators.min(1),
        ]),
        unitPrice: new FormControl(this.productToUpdate.unitPrice, [
          Validators.required,
          Validators.min(1),
        ]),
        name: new FormControl(this.productToUpdate.name, [Validators.required]),
      });
  }
  fetchCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response;
    });
  }

  submit() {
    if (!this.addProductForm.valid) {
      // uyarı
      return;
    }
    if (!this.productToUpdate) this.addNew();
    else this.update();
  }
  private update() {
    this.productService
      .update(this.addProductForm.value)
      .subscribe((response) => {
        this.toastrService.success('Product updated successfully.');
        this.router.navigateByUrl('/product');
      });
  }
  private addNew() {
    this.productService.add(this.addProductForm.value).subscribe((response) => {
      this.toastrService.success('Product added successfully.');
      this.router.navigateByUrl('/product');
    });
  }
}
