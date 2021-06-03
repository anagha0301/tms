import { TestBed } from '@angular/core/testing';

import { AdmintokeninterceptorService } from './admintokeninterceptor.service';

describe('AdmintokeninterceptorService', () => {
  let service: AdmintokeninterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintokeninterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
