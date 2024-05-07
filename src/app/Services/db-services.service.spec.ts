import { TestBed } from '@angular/core/testing';

import { DbServicesService } from './db-services.service';

describe('DbServicesService', () => {
  let service: DbServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
