import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './add-or-update-category.component.html',
  styleUrls: ['./add-or-update-category.component.css'],
})
export class AddOrUpdateCategoryComponent {
  form!: FormGroup;
  idToUpdate!: number;
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getIdFromRoute();
  }
  getIdFromRoute() {
    this.activatedRoute.params.subscribe((response) => {
      if (response['id']) {
        this.idToUpdate = response['id'];
        this.getCategoryById();
        return;
      }
      this.buildForm();
    });
  }

  getCategoryById() {
    this.categoryService.getById(this.idToUpdate).subscribe((response) => {
      this.form = this.formBuilder.group({
        id: new FormControl(response.id, []),
        name: new FormControl(response.name, [Validators.required]),
      });
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: new FormControl(null, []),
      name: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    let request = this.form.value;

    if (this.idToUpdate)
      this.categoryService.update(request).subscribe((response) => {});
    else this.categoryService.add(request).subscribe((response) => {});
  }
}
