import { TestBed } from '@angular/core/testing';

import { ProfesionOficioApiService } from './profesion-oficio-api.service';

describe('ProfesionOficioApiService', () => {
  let service: ProfesionOficioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesionOficioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
