import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateProductComponent } from './add-or-update-product.component';

describe('AddOrUpdateProductComponent', () => {
  let component: AddOrUpdateProductComponent;
  let fixture: ComponentFixture<AddOrUpdateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrUpdateProductComponent]
    });
    fixture = TestBed.createComponent(AddOrUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
