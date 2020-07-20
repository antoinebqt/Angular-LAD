import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';

@Component({
  selector: 'app-calamari',
  templateUrl: './calamari.component.html',
  styleUrls: ['./calamari.component.css'],
})
export class CalamariComponent implements OnInit {
  result: string;

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  getResult() {
    this.result = this.resultatsService.calamariResult;
  }
}
