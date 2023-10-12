import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import { ActionComponent } from './action/action.component';
import { RomComponent } from './rom/rom.component';
import { HorrorComponent } from './horror/horror.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'action',component:ActionComponent},
  {path:'rom',component:RomComponent},
  {path:'horror',component:HorrorComponent},
  {path:'addtocart',component:CartProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'products',component:ProductsComponent},
  {path:'contact',component:ContactComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
