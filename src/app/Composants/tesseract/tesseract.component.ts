import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';
import { Result } from '../../result.model';

@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.css'],
})
export class TesseractComponent implements OnInit {
  timed = false;
  result: Result[] = [];

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  getResult() {
    this.resultatsService
      .getResultFromServer()
      .subscribe((data) => (this.result = data));
    this.timed = true;
  }
}