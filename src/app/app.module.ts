import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ErrorValidatoinComponent } from './error-validatoin/error-validatoin.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductLIstComponent } from './product-list/product-list.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorValidatoinComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    ProductLIstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatInputModule,
    MatMenuModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    TitleCasePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
