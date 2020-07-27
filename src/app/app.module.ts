import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesseractComponent } from './Composants/tesseract/tesseract.component';
import { CalamariComponent } from './Composants/calamari/calamari.component';
import { BothComponent } from './Composants/both/both.component';
import { AccueilComponent } from './Composants/accueil/accueil.component';

import { ResultatsService } from './Services/resultats.service';
import { UploadService } from './Services/upload.service'

import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    TesseractComponent,
    CalamariComponent,
    BothComponent,
    AccueilComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ResultatsService, UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
