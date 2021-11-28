import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserDataService {

  constructor(private httpclient:HttpClient) { }

  apiURL= " http://localhost:3000";
  httpOptions={
    header: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
    public getUser():Observable<User>{
    return this.httpclient.get<User>(this.apiURL+"/userdata");
    }

    public addUser(user:User): Observable<User> {
      const usertodb=JSON.stringify(user);
      return this.httpclient.post<User>(this.apiURL+"/userdata",usertodb ,{'headers':{'Content-Type': 'application/json'}});
    }


}