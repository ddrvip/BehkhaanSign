import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any | UrlTree> | Promise<any | UrlTree> | any | UrlTree {
    
  if(localStorage.getItem('fname') && localStorage.getItem('lname')){
    return true;
  }else{
    this.router.navigate(['login']);
    return false;
  }
  }
  
}
