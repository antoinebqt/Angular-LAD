import { Injectable } from '@angular/core';
import { Data } from '../data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  data: Data;

  setData(uploadData) {
    this.data = uploadData;
    console.log("Data uploaded!")
  }

  getDataId(){
    return this.data.id;
  }
}
