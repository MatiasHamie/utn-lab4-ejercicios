import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio-dos',
  templateUrl: './ejercicio-dos.component.html',
  styleUrls: ['./ejercicio-dos.component.css']
})
export class EjercicioDosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void{
    this.router.navigate(['/home']);
  }
}
