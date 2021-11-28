import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterUserDataService } from '../services/register-user-data.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any=[];
  constructor(private authserve:AuthService,private router:Router,private registerserve:RegisterUserDataService) { }

  ngOnInit(): void {
  }
  
  login()
  {
    
      const usObservable = this.registerserve.getUser();
      usObservable.subscribe((response:{})=>
      {
        this.users=response;
      }
      );
    for(let us of this.users)
    {
      if(us.)
    this.authserve.login();
    this.router.navigateByUrl("/secondpage");
    }
  }
}
