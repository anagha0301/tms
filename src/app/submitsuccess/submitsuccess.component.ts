import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submitsuccess',
  templateUrl: './submitsuccess.component.html',
  styleUrls: ['./submitsuccess.component.css']
})
export class SubmitsuccessComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router: Router,public _auth:AuthService) { }

  ngOnInit(): void {
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
