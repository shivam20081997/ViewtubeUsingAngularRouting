import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondpageNavbarComponent } from './secondpage-navbar/secondpage-navbar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AuthguardService } from './services/authguard.service';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';

import { RegisterComponent } from './register/register.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';

const routes: Routes = [
  {
    path:"",
    component:NavbarComponent ,  
   
  },
  

  {
    path:"secondpage",
    component:SecondpageNavbarComponent,
    canActivate:[AuthguardService],
    children:[
      {
        path:"",
        redirectTo:"secondpage",
        pathMatch:'full'
      },
   
      {
      path:"livestreampage",
      component: StudioLivestreamComponent
      },
      {
        path:"uploadpage",
        component: StudioUploadComponent
      }
    ]

  },
  {
    path:"loginorregister",
    component:LoginRegisterComponent,
    children:[
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"login",
        component:LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
 },
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
