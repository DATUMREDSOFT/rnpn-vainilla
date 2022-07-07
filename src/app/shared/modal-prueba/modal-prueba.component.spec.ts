import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPruebaComponent } from './modal-prueba.component';

describe('ModalPruebaComponent', () => {
  let component: ModalPruebaComponent;
  let fixture: ComponentFixture<ModalPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
