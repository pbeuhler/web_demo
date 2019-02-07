import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CounterService } from '../counter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = []

  constructor(
    private _counterService: CounterService,
    private _router: Router    ) { }

  ngOnInit() {
    this._counterService.getCounter()
    .subscribe(
      res => this.counter = res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login']);
          }
          if(err.status === 500){
            this._router.navigate(['/login']);
          }
        }
      }
    )
  }

}
