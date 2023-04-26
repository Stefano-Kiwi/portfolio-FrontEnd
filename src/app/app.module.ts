import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WeatherComponent } from './components/weather/weather.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    WeatherComponent,
    StartingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Para que funcione el API para ver el clima
  ],
   exports: [
    ProjectsComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
