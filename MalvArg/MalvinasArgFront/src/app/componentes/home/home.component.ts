import { Component, OnInit } from '@angular/core';
import { Horarios } from 'src/app/modelos/horario.models';
import { HorariosApiService } from 'src/app/servicios/horarios-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HorariosApiService]
})
export class HomeComponent implements OnInit {
  public horario: Horarios = new Horarios();

  constructor(private service: HorariosApiService) { }

  ngOnInit(): void {
    this.service.obtenerHorarios().subscribe(
      resp => {
        this.horario = resp[0];
      },
      err =>{
        console.log(err);
      }
    )
  }

  editarHorarios(id:number){
    console.log(id);
    this.service.editarHorarios(id).subscribe(
      resp =>{
        this.horario = resp[id];
      }
    )
  }

}
