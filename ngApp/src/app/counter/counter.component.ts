import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CounterService } from '../counter.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  private _incrementUrl = "http://localhost:3000/api/increment"
  private _decrementUrl = "http://localhost:3000/api/decrement"

  count: number = 0;
  current: number = 0;
  next: number = 1; 
  mess: string = "";

  increment(){
    this._httpClient.get(this._incrementUrl).subscribe((res)=>{
        console.log(res);
    });
  }

  openDialog() {
    //get from server, update values to populate "Current: " and "Next: "
    this._httpClient.get(this._incrementUrl).subscribe((res)=>{
      this.current = Number(res[0]);
      this.next = Number(res[1]);
      this.mess = "Current: " + String(this.current) + "\nNext: " + String(this.next);
      this.dialogService.openConfirmDialog(this.mess)
      .afterClosed().subscribe( res => {
        if(res){
          this.count = this.next;
        }
        else{
          //undo updating values from server
          this._httpClient.get(this._decrementUrl).subscribe((res)=>{
          });
        }
      });
    });
  }

  constructor(
    private _counterService: CounterService,
    private _router: Router,
    private _httpClient: HttpClient,
    private dialogService: DialogService,
    ) { }

  ngOnInit() {
    this._counterService.getCounter()
    .subscribe(
      res => this.count = res,
      err => {
        if(err instanceof HttpErrorResponse){
          //no token
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
