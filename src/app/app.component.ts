import { Component, ViewChild, ElementRef } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { UploadService } from './Services/upload.service';
import { DataService } from './Services/data.service';

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
  uploadData: string;

  constructor(
    private uploadService: UploadService,
    private http: HttpClient,
    private dataService: DataService
  ) {}

  onFileDropped(event) {
    console.log("Dropzone doesn't work for the moment");
  }

  onClick() {
    this.canSubmit = true;
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
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
    const formData = new FormData();
    formData.append('file', file.data);
    this.uploadService.upload(formData).subscribe({
      next: (value: any) => {
        console.log(value);
        this.uploadData = value.body;
      },
      error: (err) => console.error(err),
      complete: () => {
        console.log('Upload done!');
        this.dataService.upload(this.uploadData).subscribe({
          complete: () => console.log('Upload data done!'),
        });
      },
    });
  }
}
