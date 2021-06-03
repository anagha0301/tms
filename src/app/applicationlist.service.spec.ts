import { TestBed } from '@angular/core/testing';

import { ApplicationlistService } from './applicationlist.service';

describe('ApplicationlistService', () => {
  let service: ApplicationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
