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
  fileUploadIcon = faFileUpload;
  files: File[] = [];

  constructor(private resultatsService: ResultatsService) {}

  fileBrowseHandler(files) {
    alert("Le fichier a bien été importé")
    this.onUploadFile(files);
  }

  onFileDropped($event) {
    alert("Le fichier a bien été droppé")
    this.onUploadFile($event);
  }

  onUploadFile(files: Array<any>) {
    this.fileUploaded = true;
  }

  onSubmit() {
    this.resultatsService.getResultFromServer();
  }
}
