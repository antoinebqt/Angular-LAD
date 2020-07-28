import { Component, ViewChild, ElementRef } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UploadService } from './Services/upload.service';

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
  uploadData:string;

  constructor(private uploadService: UploadService, private http: HttpClient) {}

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

  onFileDropped(event) {
    console.log("Dropzone doesn't work for the moment");
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
    this.uploadService
      .upload(formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          file.inProgress = false;
          return of(`${file.data.name} upload failed.`);
        })
      )
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          console.log(event.body);
          this.uploadData=event.body;
        }
      });
  }
}
