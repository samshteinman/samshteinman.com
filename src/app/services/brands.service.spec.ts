import { TestBed } from '@angular/core/testing';

import { BrandsService } from './brands.service';

describe('BrandsService', () => {
  let service: BrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 brands', () => {

    service.getBrands().subscribe(
      brands => expect(brands.length).toBe(2),
      fail
    );

  })
});
