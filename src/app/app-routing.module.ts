import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './componetes/personaje/personaje.component';
import { PersonajesComponent } from './componetes/personajes/personajes.component';
import { PrincipalComponent } from './componetes/principal/principal.component';
import { Principal02Component } from './componetes/principal02/principal02.component';
import { Principal03Component } from './componetes/principal03/principal03.component';


const routes: Routes = [
  {path: '', redirectTo: '/personajes', pathMatch: 'full'},
  {path: 'personaje/:id', component: PersonajeComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'principal', component :PrincipalComponent} ,
  {path: 'principal02', component :Principal02Component} ,
  {path: 'principal03', component :Principal03Component} ,
  {path: '**', redirectTo: '/principal'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
