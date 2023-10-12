import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route :Router){}

username=""
password=""
user:any;
login(){

  this.user={'uname':this.username,'pwd':this.password}
  
  if(this.username=="admin"){

    if(this.password=="12345"){
      localStorage.setItem('user',JSON.stringify(this.user))
      Swal.fire({
        icon: 'success',
        title: 'Yeah...',
        text: 'Login successful!',
        
      })
      this.route.navigateByUrl('/products')
    }
    else{
      alert("wrong credentials")
    }
}
else{

  if(this.username!="" && this.password=="123"){
    localStorage.setItem('user',JSON.stringify(this.user))
    Swal.fire({
      icon: 'success',
      title: 'Yeah...',
      text: 'Login successful!',
      
    })
    this.route.navigateByUrl('/products')
  }
}



}


ngOnInit(){

  Swal.fire({
    text: 'Hey there! Want a ride with book ? What are you waiting for ? Just sign up. Start your reading journey with us and let your imagination drive you BEYOND',
    
  })
}
}
