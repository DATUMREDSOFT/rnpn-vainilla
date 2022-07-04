import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUIComponent } from './dui.component';

describe('DUIComponent', () => {
  let component: DUIComponent;
  let fixture: ComponentFixture<DUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
