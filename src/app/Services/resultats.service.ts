import { Injectable } from '@angular/core';
import { CALAMARIRESULT, TESSERACTRESULT } from '../mock-results';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {
  calamariResult: string;
  tesseractResult: string;
  constructor() {}

  getResultFromServer() {
    this.calamariResult = CALAMARIRESULT;
    this.tesseractResult = TESSERACTRESULT;
  }
}
