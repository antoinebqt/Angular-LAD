import { Component } from '@angular/core';
import { ResultatsService } from './Services/resultats.service';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fileUploaded = false;
  fileName: string;
  fileUploadIcon = faFileUpload;

  constructor(private resultatsService: ResultatsService) {}

  detectFile(event) {
    this.onUploadFile(event.target.files[0]);
    this.fileName = event.target.files[0].name;
  }

  onUploadFile(file: File) {
    this.fileUploaded = true;
  }

  onSubmit() {
    this.resultatsService.getResultFromServer();
  }
}
