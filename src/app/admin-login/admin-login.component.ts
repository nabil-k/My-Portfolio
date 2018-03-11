import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  email:any
  password:any
  credentialsObj:any
  statusState:any
  status: any;

  ngOnInit() {
  }

  onSubmit(){
    this.credentialsObj = {"email":this.email, "password":this.password}
    console.log(this.credentialsObj)
    this.auth.login(this.credentialsObj).subscribe((data) => {
      this.status = data.json().data
      console.log(this.status)

      if (this.status === "Successfully Logged In"){
        this.router.navigateByUrl('/home')
        console.log("Successfully Logged In")
      }else{
        if (this.status === "invalid Email"){
          console.log("Invalid Email")
          this.statusState = "Invalid Email"
        }else{
          console.log("Invalid Password")
          this.statusState = "Invalid Password"
        }
      }

    },(err)=>{
      console.log(err)
    })
  }
}
