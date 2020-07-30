import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../../Services/resultats.service';
import { Result } from '../../result.model';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css'],
})
export class BothComponent implements OnInit {
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