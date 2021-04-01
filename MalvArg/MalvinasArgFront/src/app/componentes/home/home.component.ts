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
  
  public horario: Horarios[] = [];

  constructor(private service: HorariosApiService) { }

  ngOnInit(): void {
    this.service.obtenerHorarios().subscribe(
      resp => {
        this.horario = resp;
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
        //this.horario = resp[id];
      },
      err =>{
        console.log(err);
      }
    )
  }

  agregarHorarios(newHorario: Horarios){
    this.service.agregarHorarios(newHorario).subscribe(
      resp=>{
        console.log(resp);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
