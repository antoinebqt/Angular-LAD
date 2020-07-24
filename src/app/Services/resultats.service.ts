import { Injectable } from '@angular/core';
import { Result } from '../result.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {
  showResult = false;

  constructor(private http: HttpClient) {}

  getResultFromServer() {
    return this.http.get<Result[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
