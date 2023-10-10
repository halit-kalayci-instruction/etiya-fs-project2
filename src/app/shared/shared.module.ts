import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent],
  imports: [CommonModule, SharedRoutingModule, TranslateModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
