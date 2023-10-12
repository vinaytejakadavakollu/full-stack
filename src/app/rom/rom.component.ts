import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-rom',
  templateUrl: './rom.component.html',
  styleUrls: ['./rom.component.css']
})
export class RomComponent {



  constructor(private service:ProductsService,private route:Router,private cart:CartService){}

products:any;
rom_books:any;
ngOnInit(){

this.service.getall().subscribe(

  (res)=>{this.products=res
  }
)
this.rom_books=this.products.filter(

  (item:any)=>{return item.pgenre=="rom"}
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
