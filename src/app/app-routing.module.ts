import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './components/starting-page/starting-page.component'; // Importo las distintas Vistas
import { ProjectsComponent } from './components/projects/projects.component';
import { PagError404Component } from './components/pag-error404/pag-error404.component';

const routes: Routes = [
  {path: 'inicio', component:StartingPageComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // Para redireccionar a inicio
  {path: '**', component: PagError404Component} // Implementar página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
