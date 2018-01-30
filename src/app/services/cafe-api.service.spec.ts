import { TestBed, inject } from '@angular/core/testing';

import { CafeApiService } from './cafe-api.service';

describe('CafeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeApiService]
    });
  });

  it('should be created', inject([CafeApiService], (service: CafeApiService) => {
    expect(service).toBeTruthy();
  }));
});
