import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDUIComponent } from './datos-dui.component';

describe('DatosDUIComponent', () => {
  let component: DatosDUIComponent;
  let fixture: ComponentFixture<DatosDUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
