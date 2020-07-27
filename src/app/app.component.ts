import { Component, ViewChild, ElementRef } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { UploadService } from './Services/upload.service';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fileUploadIcon = faFileUpload;
  homeIcon = faHome;
  selectedFile: File = null;
  canSubmit = false;

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  
    constructor(private uploadService: UploadService) { }

  fileBrowseHandler(event) {
    this.selectedFile = <File>event.target.files[0];
    this.canSubmit = true;
  }

  onFileDropped(event) {
    this.selectedFile = event.target.files[0];
    this.canSubmit = true;
  }

  uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }
}
