import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionOficioComponent } from './profesion-oficio.component';

describe('ProfesionOficioComponent', () => {
  let component: ProfesionOficioComponent;
  let fixture: ComponentFixture<ProfesionOficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionOficioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionOficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
