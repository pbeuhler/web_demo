import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post(this._loginUrl, user)
  }

}
