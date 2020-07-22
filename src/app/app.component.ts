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

  onFileBrowsed(event) {
    this.onUploadFile(event.target.files[0]);
    this.fileName = event.target.files[0].name;
    alert(this.fileName + ' a bien été browsé');
  }

  onFileDropped(event) {
    this.onUploadFile();
    alert('Le fichier a bien été droppé');
  }

  onUploadFile(file: File) {
    this.fileUploaded = true;
  }

  onSubmit() {
    this.resultatsService.getResultFromServer();
  }
}
