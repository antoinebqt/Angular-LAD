import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css'],
})
export class BothComponent implements OnInit {
  resultOfTesseract: string;
  resultOfCalamari: string;

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  getResult() {
    this.resultOfCalamari = this.resultatsService.calamariResult;
    this.resultOfTesseract = this.resultatsService.tesseractResult;
  }
}
