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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Para que funcione el API para ver el clima
    FormsModule,
    ReactiveFormsModule
  ],
   exports: [
    ProjectsComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
