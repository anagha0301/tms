import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'
import {ApprovalService} from '../approval.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-approvalform',
  templateUrl: './approvalform.component.html',
  styleUrls: ['./approvalform.component.css']
})
export class ApprovalformComponent implements OnInit {
  showImage: boolean = true;
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router: Router,public _AdminService:AdminService,private _ApprovalService:ApprovalService) { }
 trainerItem={
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
    typemp:''
    }
  ngOnInit(): void {
    let trainerId = localStorage.getItem("id");
    console.log(trainerId);
    this._ApprovalService.getUser(trainerId).subscribe((data)=>{
      this.trainerItem=JSON.parse(JSON.stringify(data));
  })
  }
  approve()
  {   
    this._ApprovalService.newTrainer(this.trainerItem);
    // console.log("Called"); 
    console.log(this.trainerItem)   
    alert("Approved Successfully");
    this.router.navigate(['/applicationlist']);
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['/admin'])
  }
  loggedUser()
  {
    this.router.navigate(['/admindashboard'])
  }
}
