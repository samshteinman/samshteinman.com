import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brands: Brand[] = [
    {picturePath: 'assets/github.png', destinationUrl: 'https://github.com/samshteinman'},
    {picturePath: 'assets/linkedin.png', destinationUrl: 'https://www.linkedin.com/in/samshteinman/'},
    {picturePath: "assets/appstore.png", destinationUrl:"https://apps.apple.com/sr/app/sharevibe/id1507858210"}
  ]
  
  getBrands(): Brand[] {
    return this.brands;
  }
}
