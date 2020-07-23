import { Injectable } from '@angular/core';
import { CALAMARIRESULT,TESSERACTRESULT,TESSERACTTIME,CALAMARITIME } from '../mock-results';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {
  calamariProcessTime: number = 0;
  tesseractResult: string;
  tesseractProcessTime: number = 0;

  constructor(private _http: HttpClient) {}

  getResultFromServer(base: string = "USD"):Promise<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/users?id=1').toPromise();
  }
}
