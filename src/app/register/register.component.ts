import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterUserDataService } from '../services/register-user-data.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
 
  user:User={
    
    username:"add username",
    password:"add password"

  };

  constructor(private authserve:AuthService,private router:Router,private registerserve:RegisterUserDataService) { }

  ngOnInit(): void {
  }

  register()
  {
    const observableUser=this.registerserve.addUser(this.user)
    observableUser.subscribe((data:{})=>{
   
     
     console.log(data);
    
   });
  
    this.router.navigateByUrl('/secondpage');
  }


}
