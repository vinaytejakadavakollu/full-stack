import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../services/product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {


  constructor(private service:ProductsService,private route:Router,private cart:CartService){}

products:any;
action_books:any;
ngOnInit(){

this.service.getall().subscribe(

  (res)=>{this.products=res
  }
)
this.action_books=this.products.filter(

  (item:any)=>{return item.pgenre=="action"}
)
}

addtocart(b:any){

  this.cart.adding(b)
  this.route.navigateByUrl('/addtocart')

}


price:any;
username=""
email=""
phone=""


buy(b:any){
  
this.price=b.pprice;
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


}
