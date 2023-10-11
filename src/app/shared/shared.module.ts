import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, LoginComponent],
  imports: [CommonModule, SharedRoutingModule, TranslateModule,FormsModule,ReactiveFormsModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
