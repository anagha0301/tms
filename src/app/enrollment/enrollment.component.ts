import { Component, OnInit } from '@angular/core';
import { ApplicationlistService } from '../applicationlist.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private applicationlistService:ApplicationlistService,private router: Router,public _auth:AuthService) { }
  applicationlist={
    name :'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    current:'',
    designation:'',
    appliedcourse:'',
    // imageUrl:''
    }
  ngOnInit(): void {
  }
  Enroll()
  {   
    this.applicationlistService.newApplicationlist(this.applicationlist);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/submitsuccess']);
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['/'])
  }
  loggedUser()
  {
    this.router.navigate(['/enrollment'])
  }
}
