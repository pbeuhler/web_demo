import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counterUrl = "http://localhost:3000/api/counter";

  constructor(private http: HttpClient) { }

  getCounter() {
    return this.http.get<any>(this._counterUrl);
  }
  
}
