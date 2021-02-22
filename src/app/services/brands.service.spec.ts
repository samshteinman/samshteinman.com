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

  it('should return 3 brands, apple, linkedin, github', () => {
    let brands = service.getBrands();
    expect(brands.length).toBe(3)
    expect(brands).toContain({picturePath: 'assets/github.png', destinationUrl: 'https://github.com/samshteinman'});
    expect(brands).toContain({picturePath: 'assets/linkedin.png', destinationUrl: 'https://www.linkedin.com/in/samshteinman/'});
    expect(brands).toContain({picturePath: "assets/appstore.png", destinationUrl:"https://apps.apple.com/sr/app/sharevibe/id1507858210"});
  });  
    

});
