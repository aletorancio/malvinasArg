import { Component, OnInit } from '@angular/core';
import { Horarios } from 'src/app/modelos/horario.models';
import { HorariosApiService } from 'src/app/servicios/horarios-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public horario: Horarios = new Horarios();

  constructor(private service: HorariosApiService) { }

  ngOnInit(): void {
    this.service.obtenerHorarios().subscribe(
      resp => {
        console.log(resp)
        this.horario = resp[0];
        console.log(this.horario)
      },
      err =>{
        console.log(err);
      }
    )
  }

}
