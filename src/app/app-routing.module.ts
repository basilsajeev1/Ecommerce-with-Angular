import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryWiseComponent } from './category-wise/category-wise.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'category-wise/:category', component:CategoryWiseComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
