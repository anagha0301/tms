import { Component, OnInit } from '@angular/core';
import {SignupModel} from './signupmodel'
import { Router } from '@angular/router';
import {TrainersService } from '../trainers.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userItem= new SignupModel(null,null,null,null,null,null)
  constructor(private TrainersService: TrainersService,private router: Router) { }

  ngOnInit(): void {
  }
  AddTrainer()
  {    
    this.TrainersService.newTrainer(this.userItem);
    console.log("Called");    
    alert("Successfully Registered");
    this.router.navigate(['/login']);
  }

}
