import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WeatherComponent } from './components/weather/weather.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { PagError404Component } from './components/pag-error404/pag-error404.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { interceptorProvider } from './service/interceptor-service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { NuevaSkillComponent } from './components/skills/nueva-skill.component';
import { FooterComponent } from './components/footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    WeatherComponent,
    StartingPageComponent,
    PagError404Component,
    LoginComponent,
    ExperienciaComponent,
    EducationComponent,
    SkillsComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    EditarSkillComponent,
    NuevaSkillComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Para que funcione backend y api del clima
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    })
  ],
   exports: [
    ProjectsComponent
   ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
