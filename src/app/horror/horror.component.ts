import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent {

 
  constructor(private service:ProductsService,private route:Router,private cart:CartService){}

products:any;
horror_books:any;
ngOnInit(){

this.service.getall().subscribe(

  (res)=>{this.products=res
  }
)
this.horror_books=this.products.filter(

  (item:any)=>{return item.pgenre=="Horror"}
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
