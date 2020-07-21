import { Injectable } from '@angular/core';
import {
  CALAMARIRESULT,
  TESSERACTRESULT,
  TESSERACTTIME,
  CALAMARITIME,
} from '../mock-results';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {
  calamariResult: string;
  calamariProcessTime: number = 0;
  tesseractResult: string;
  tesseractProcessTime: number = 0;

  constructor() {}

  getResultFromServer() {
    this.calamariResult = CALAMARIRESULT;
    this.calamariProcessTime = CALAMARITIME;
    this.tesseractResult = TESSERACTRESULT;
    this.tesseractProcessTime = TESSERACTTIME;
  }
}
