import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './components/starting-page/starting-page.component'; // Importo las distintas Vistas
import { ProjectsComponent } from './components/projects/projects.component';
import { PagError404Component } from './components/pag-error404/pag-error404.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';

const routes: Routes = [
  {path: 'inicio', component:StartingPageComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // Para redireccionar a inicio
  {path: '**', component: PagError404Component} // Implementar página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
