import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user={
    uname:'',
    pass:''
  }
  constructor(private admin:AdminService,private router:Router) { }
  
  ngOnInit(): void {
  }
  loginAdmin () {
    
    this.admin.loginAdmin(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/admindashboard'])
        //console.log("suucess")
      },
      err => {
        console.log(err);
        alert("Invalid email or password")
        this.router.navigate(['/admin'])
      }
    ) 
  }

}
