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

  private _incrementUrl = "http://localhost:3000/api/increment"

  count: number = 0;
  clickCount(): void{
    this.count++
  }

  increment(){
    this._httpClient.get(this._incrementUrl).subscribe((res)=>{
        console.log(res);
    });
  }

  constructor(
    private _counterService: CounterService,
    private _router: Router,
    private _httpClient: HttpClient,
    ) { }

  ngOnInit() {
    this._counterService.getCounter()
    .subscribe(
      res => this.count = res,
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