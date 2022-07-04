import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaNacComponent } from './partida-nac.component';

describe('PartidaNacComponent', () => {
  let component: PartidaNacComponent;
  let fixture: ComponentFixture<PartidaNacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaNacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidaNacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
