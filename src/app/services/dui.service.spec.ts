import { TestBed } from '@angular/core/testing';

import { DuiService } from './dui.service';

describe('DuiService', () => {
  let service: DuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
