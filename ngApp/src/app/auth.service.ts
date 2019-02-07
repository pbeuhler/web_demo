import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient) { }

  loginUser(user) {
    console.log("hello auth");
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
