import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjercicioUnoComponent } from './componentes/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './componentes/ejercicio-dos/ejercicio-dos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/ejercicio-dos/login/login.component';
import { BienvenidoComponent } from './componentes/ejercicio-dos/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/ejercicio-dos/error/error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ejercicioUno', component: EjercicioUnoComponent},
  {path: 'ejercicioDos', component: EjercicioDosComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
