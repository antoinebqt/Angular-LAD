import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  SERVER_URL: string = 'http://localhost:8080/upload';
  constructor(private httpClient: HttpClient) {}

  public upload(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      observe: 'events',
    });
  }
}
