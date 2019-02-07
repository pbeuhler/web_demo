import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = []

  constructor(private _counterService: CounterService) { }

  ngOnInit() {
    this._counterService.getCounter()
    .subscribe(
      res => this.counter = res,
      err => console.log(err)
    )
  }

}
