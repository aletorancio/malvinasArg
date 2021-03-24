import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horarios } from '../modelos/horario.models';

@Injectable({
  providedIn: 'root'
})
export class HorariosApiService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:5392/api/Horarios';

  obtenerHorarios(): Observable<Horarios[]>{
    return this.http.get<Horarios[]>(this.url);
  }
}
