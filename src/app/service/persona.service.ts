import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  URL = 'https://portfolio-stefano-kiwi.koyeb.app/personas/';
  constructor(private http: HttpClient) { 

    }
    public getPersona(): Observable<persona>{
      return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
