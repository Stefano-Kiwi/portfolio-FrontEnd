import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherServiceService){}

  ngOnInit(): void {
      this.getWeatherData();
  }

  getWeatherData(): void {
    this.weatherService.getWeatherForCity().subscribe(
      data => {
        this.weatherData = data;
        this.weatherData.main.temp = (this.weatherData.main.temp - 273.15).toFixed(1);  // Convierto kelvin a grados celsius
        this.weatherData.main.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(1); 
        this.weatherData.main.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(1); 
        console.log(this.weatherData);
      },
      error => {
        console.log(error);
      }
    );
  }
}
