import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  {
    path: 'products', component: ProductFilterComponent,
    children: [
      { path: '', component: ProductComponent },
      { path: 'product-details', component: ProductDetailsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}