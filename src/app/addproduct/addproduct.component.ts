import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  pid:any;
  pname:any;
  pprice:any;
  pgenre:any;
  pimg:any;
  pauthor:any;
  pabout:any;
  pobj:any;

constructor(private service :ProductsService , private route:Router){}

  adding(){

    this.pobj={
      pid:this.pid,
      pimg:this.pimg,
      pgenre:this.pgenre,
      pname:this.pname,
      pprice:this.pprice,
      pauthor:this.pauthor,
      pabout:this.pabout
    }
   this.service.additem(this.pobj)
   this.route.navigateByUrl('/products')

  }
}
