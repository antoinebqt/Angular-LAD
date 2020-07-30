import { Injectable } from '@angular/core';
import { Result } from '../result.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {

  constructor(private http: HttpClient) {}

  getResultFromServer() {
    return this.http.get<Result[]>(
      'http://localhost:3000/process'
    );
  }
}