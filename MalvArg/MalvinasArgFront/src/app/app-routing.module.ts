import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarHorarioComponent } from './componentes/agregar-horario/agregar-horario.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"horario/:nuevo", component: AgregarHorarioComponent},
  { path:"**", pathMatch:"full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
