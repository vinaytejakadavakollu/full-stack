import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service:ProductsService,private cart:CartService,private route:Router){}

products:any;

price:any;
username="";
email="";
phone="";
ngOnInit(){

this.service.getall().subscribe(

  (res)=>{this.products=res}
)
}

addtocart(b:any){

  this.cart.adding(b);
  this.route.navigateByUrl('/addtocart');

}

buynow(){

  if(this.username!="" && this.phone!="" && this.email!=""){
   Swal.fire({
     icon: 'success',
     title: 'Purchase Successful...',
     text: 'Your book is on the way to you',
     
   })
  }
 }
 



buy(b:any){
  
this.price=b.pprice;
}



}
