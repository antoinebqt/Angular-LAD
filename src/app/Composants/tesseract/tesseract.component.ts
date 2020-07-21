import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';

@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.css'],
})
export class TesseractComponent implements OnInit {
  secondes: number = 0;
  result: string;

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  getResult() {
    this.result = this.resultatsService.tesseractResult;
    this.secondes = this.resultatsService.tesseractProcessTime;
  }
}
