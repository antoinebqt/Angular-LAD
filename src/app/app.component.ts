import { Component, ViewChild, ElementRef } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UploadService } from './Services/upload.service';
import { Data } from './data.model';
import { DataService } from './Services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files = [];
  fileUploadIcon = faFileUpload;
  homeIcon = faHome;
  canSubmit = false;
  uploadData: Data;

  constructor(private uploadService: UploadService, private dataService: DataService) {}

  onFileDropped(event) {
    console.warn("Dropzone doesn't work for the moment");
  }

  onClick() {
    this.canSubmit = true;
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file });
      }
    };
  }

  onSubmit() {
    this.uploadFiles();
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach((file) => {
      this.uploadFile(file);
    });
  }

  uploadFile(file) {
    this.uploadService.upload(file).subscribe({
      next: (value: any) => {
        console.log(value.body);
        this.uploadData = value.body;
      },
      error: (err) => console.error(err),
      complete: () => {
        console.log('Upload done!');
        this.dataService.setData(this.uploadData);
      },
    });
  }
}
