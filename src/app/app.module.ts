import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { SecondpageNavbarComponent } from './secondpage-navbar/secondpage-navbar.component';

import { StudioUploadComponent } from './studio-upload/studio-upload.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    NavbarComponent,
    StudioLivestreamComponent,
    SecondpageNavbarComponent,
    
    StudioUploadComponent,
 
    LoginComponent,
    RegisterComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    CommonModule ,
    ReactiveFormsModule ,
    MatInputModule ,
    MatChipsModule ,
    DragDropModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }