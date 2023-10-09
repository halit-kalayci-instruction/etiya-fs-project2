import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './features/product/product.module';

@NgModule({
  declarations: [AppComponent],
  // ProductModule'i sadece ve sadece ihtiyaç duyduğumda yükle..
  // Products ile ilgili bir sayfaya girdiğinde
  // 11:20
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
