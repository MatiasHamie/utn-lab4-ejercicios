import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EjerciciosModule } from "./modulos/ejercicios/ejercicios.module";

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    EjerciciosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
