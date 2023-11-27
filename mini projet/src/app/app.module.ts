import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { EventsComponent } from './body/events/events.component';
import { HeaderComponent } from './body/header/header.component';
import { DashboardComponent } from './services/dashboard/dashboard.component';
import { LoginComponent } from './composants/login/login.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { LivreComponent } from './composants/livre/livre.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { DetailLivreComponent } from './composants/detail-livre/detail-livre.component';
import { AjouterLivreComponent } from './composants/ajouter-livre/ajouter-livre.component';
import { ListLivreComponent } from './composants/list-livre/list-livre.component';
import { ListPersonneComponent } from './composants/list-personne/list-personne.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    PersonneComponent,
    LivreComponent,
    ErreurComponent,
    DetailLivreComponent,
    AjouterLivreComponent,
    ListLivreComponent,
    ListPersonneComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
