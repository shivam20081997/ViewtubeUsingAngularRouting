import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    return this.authenticateUser(state.url);
   
  }

  authenticateUser(url:String)
  {
    if(this.auth.isAuthenticated)
    {
    return this.auth.isAuthenticated;
    }
    this.auth.redirectedUrl=url;
    return this.router.parseUrl('/loginorregister');
}
}
