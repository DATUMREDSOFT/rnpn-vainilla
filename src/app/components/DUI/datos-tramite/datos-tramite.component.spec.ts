import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTramiteComponent } from './datos-tramite.component';

describe('DatosTramiteComponent', () => {
  let component: DatosTramiteComponent;
  let fixture: ComponentFixture<DatosTramiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTramiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
