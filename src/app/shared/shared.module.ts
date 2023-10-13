import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageDirective,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
  ],
  exports: [NavbarComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class SharedModule {}
