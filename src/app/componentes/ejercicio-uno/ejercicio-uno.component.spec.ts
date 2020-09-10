import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioUnoComponent } from './ejercicio-uno.component';

describe('EjercicioUnoComponent', () => {
  let component: EjercicioUnoComponent;
  let fixture: ComponentFixture<EjercicioUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
