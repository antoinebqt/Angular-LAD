import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css'],
})
export class BothComponent implements OnInit {
  resultOfTesseract: string;
  secondesOfTesseract: number = 0;
  resultOfCalamari: string;
  secondesOfCalamari: number = 0;

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  getResult() {
    this.resultOfCalamari = this.resultatsService.calamariResult;
    this.secondesOfCalamari = this.resultatsService.calamariProcessTime;
    this.resultOfTesseract = this.resultatsService.tesseractResult;
    this.secondesOfTesseract = this.resultatsService.tesseractProcessTime;
  }
}
