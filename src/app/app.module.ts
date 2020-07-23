import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TesseractComponent } from './Composants/tesseract/tesseract.component';
import { CalamariComponent } from './Composants/calamari/calamari.component';
import { ResultatsService } from './Services/resultats.service';
import { BothComponent } from './Composants/both/both.component';
import { AccueilComponent } from './Composants/accueil/accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DndDirective } from './dnd.directive';
import { HttpClientModule } from '@angular/common/http';

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
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ResultatsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
