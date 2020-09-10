import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EjercicioUnoComponent } from '../../componentes/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from '../../componentes/ejercicio-dos/ejercicio-dos.component';
import { BienvenidoComponent } from '../../componentes/ejercicio-dos/bienvenido/bienvenido.component';
import { LoginComponent } from '../../componentes/ejercicio-dos/login/login.component';
import { ErrorComponent } from '../../componentes/ejercicio-dos/error/error.component';


@NgModule({
  declarations: [
    EjercicioUnoComponent,
    EjercicioDosComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EjerciciosModule { }
