import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'd6eb4be5ec93e863d6642a520c69d27a';

  constructor(private http: HttpClient) { }

  // Método para obtener el clima de Buenos Aires usando la API de OpenWeatherMap
  getWeatherForCity(): Observable<any> {
    const city = 'Buenos Aires';
    const countryCode = 'AR';
    const url = `${this.apiUrl}?q=${city},${countryCode}&appid=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => response),
      catchError(error => of(error))
    );
  }
}