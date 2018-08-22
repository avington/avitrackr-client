import { TestBed, inject } from '@angular/core/testing';

import { HttpAuthIntercetorService } from './http-auth-intercetor.service';

describe('HttpAuthIntercetorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAuthIntercetorService]
    });
  });

  it('should be created', inject([HttpAuthIntercetorService], (service: HttpAuthIntercetorService) => {
    expect(service).toBeTruthy();
  }));
});
