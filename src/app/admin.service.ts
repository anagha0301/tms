import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  loginAdmin(user){
    return this.http.post<any>("http://localhost:3000/admin",user)
    // .subscribe((data)=>{
    //   console.log("Success");
    // })
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  constructor(private http:HttpClient) { }
}
