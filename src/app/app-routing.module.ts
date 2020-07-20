import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesseractComponent } from './Composants/tesseract/tesseract.component';
import { CalamariComponent } from './Composants/calamari/calamari.component';
import { BothComponent } from './Composants/both/both.component';
import { AccueilComponent } from './Composants/accueil/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'tesseract', component: TesseractComponent },
  { path: 'calamari', component: CalamariComponent },
  { path: 'both', component: BothComponent },
  { path: '**', redirectTo: '/accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
