import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _admin:AdminService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._admin.loggedIn())
    {
      console.log('true')
      return true

    }
    // else if(this.admin.loggedIn()){
    //   console.log('true')
    //   return true
    // }
    else{
      this._router.navigate(['/admin'])
      return false;

    }
  
}

  
}
