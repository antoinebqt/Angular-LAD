import { Component } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fileUploaded = false;
  fileUploadIcon = faFileUpload;
  homeIcon = faHome;
  selectedFile: File = null;
  canSubmit = false;

  constructor(private http: HttpClient) {}

  fileBrowseHandler(event) {
    this.selectedFile = <File>event.target.files[0];
    this.canSubmit = true;
  }

  onFileDropped(event) {
    this.selectedFile = event.target.files[0];
    this.canSubmit = true;
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post(
        'http://localhost:3000/upload',
        {
          fileName: this.selectedFile.name,
          file: fd,
        },
        {
          reportProgress: true,
          observe: 'events',
        }
      )
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(
            'Upload Progress: ' +
              Math.round((event.loaded / event.total) * 100) +
              '%'
          );
        } else if (event.type === HttpEventType.Response) {
          console.log('Upload terminé');
        }
      });
  }
}
