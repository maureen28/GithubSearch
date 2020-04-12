import { TestBed } from '@angular/core/testing';

import { GprofileService } from './gprofile.service';

describe('GprofileService', () => {
  let service: GprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
