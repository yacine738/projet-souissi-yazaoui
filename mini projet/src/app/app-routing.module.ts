import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './composants/livre/livre.component';
import { DetailLivreComponent } from './composants/detail-livre/detail-livre.component';
import { AjouterLivreComponent } from './composants/ajouter-livre/ajouter-livre.component';
import { LoginComponent } from './composants/login/login.component';
import { DashboardComponent } from './services/dashboard/dashboard.component';
import { ErreurComponent } from './composants/erreur/erreur.component';

const routes: Routes = [
  { path: '', redirectTo: '/livre', pathMatch: 'full' },
  { path: 'livre', component: LivreComponent },
  { path: 'livre/:id', component:DetailLivreComponent},
  { path: 'ajouter-book',component:AjouterLivreComponent},
  { path: 'login', component: LoginComponent },
  {path: 'dashboard' , component:DashboardComponent},
  { path: '**', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
