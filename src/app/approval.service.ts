import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  item=[{
    name :'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    current:'',
    designation:'',
    appliedcourse:'',
    type:''
    
    }]
  constructor(private http:HttpClient) { }
  newTrainer(item){
    console.log(item);
    return this.http.post("http://localhost:3000/trainer/approvedlist",{"trainer":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  getUser(id:any){
    console.log(id)
    return this.http.get("http://localhost:3000/trainer/"+id);
  }
  getApprovedlist(){
    return this.http.get("http://localhost:3000/trainer/approvedlist");
   
  }
}
