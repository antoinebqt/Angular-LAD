import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  SERVER_URL: string = 'http://localhost:3000/upload';
  constructor(private httpClient: HttpClient) {}

  public upload(uploadData) {
    return this.httpClient.post<any>(this.SERVER_URL, uploadData, {
      observe: 'events',
    });
  }
}
