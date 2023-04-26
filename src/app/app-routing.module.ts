import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './components/starting-page/starting-page.component'; // Importo las distintas Vistas
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: 'inicio', component:StartingPageComponent},
  {path: 'proyectos', component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
