import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ActionComponent } from './action/action.component';
import { RomComponent } from './rom/rom.component';
import { HorrorComponent } from './horror/horror.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AddproductComponent,
    NavComponent,
    ActionComponent,
    RomComponent,
    HorrorComponent,
    CartProductsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
