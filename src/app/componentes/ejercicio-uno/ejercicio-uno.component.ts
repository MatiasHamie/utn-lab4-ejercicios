import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {

  edadUno: number = 0;
  edadDos: number = 0;
  suma: number = 0;
  promedio: number = 0;


  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  calcular(): void{
    this.suma =  this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;

    console.log(this.suma);
  }

  onBack(): void{
    this.router.navigate(['/home']);
  }

  reiniciar(): void{
    this.suma = 0;
    this.promedio = 0;
    this.edadUno = 0;
    this.edadDos = 0;
  }
}
