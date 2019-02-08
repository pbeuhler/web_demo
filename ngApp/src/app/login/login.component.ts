import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  private validationError = false;
  private isMenuOpen = true;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    ) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/counter']);
        },
      err => {
        var errorMessage = document.getElementById("loginError");
        errorMessage.style.display = "block";
        //this.validationError = true//console.log(err)
      }
    )
  }

}
