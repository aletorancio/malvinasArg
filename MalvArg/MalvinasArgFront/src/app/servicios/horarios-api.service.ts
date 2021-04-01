import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horarios } from '../modelos/horario.models';

@Injectable({
  providedIn: 'root'
})
export class HorariosApiService {

  constructor(private http: HttpClient) {}

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  

  private readonly url = '/api/Horarios';



  obtenerHorarios(): Observable<Horarios[]>{
    return this.http.get<Horarios[]>(this.url);
  }

  editarHorarios(id:number): Observable<Horarios[]>{
    return this.http.put<Horarios[]>(this.url,id);
  }

  agregarHorarios(newHorario: Horarios): Observable<Horarios[]>{
    return this.http.post<Horarios[]>(this.url,newHorario);
  }
}
