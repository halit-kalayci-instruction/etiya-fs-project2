import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLoaderComponent } from './overlay-loader.component';

describe('OverlayLoaderComponent', () => {
  let component: OverlayLoaderComponent;
  let fixture: ComponentFixture<OverlayLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayLoaderComponent]
    });
    fixture = TestBed.createComponent(OverlayLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
