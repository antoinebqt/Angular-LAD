import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';

@Component({
  selector: 'app-calamari',
  templateUrl: './calamari.component.html',
  styleUrls: ['./calamari.component.css'],
})
export class CalamariComponent implements OnInit {
  result: any;
  secondes: number = 0;

  constructor(private resultatsService: ResultatsService) {}

  ngOnInit(): void {}

  async getResult(base) {
    this.result = await this.resultatsService.getResultFromServer(base);
  }
}
