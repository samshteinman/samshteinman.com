import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brands: Brand[] = [
    {picturePath: 'assets/github.png', destinationUrl: 'https://github.com/samshteinman'},
    {picturePath: 'assets/linkedin.png', destinationUrl: 'https://www.linkedin.com/in/samshteinman/'}
  ]
  
  getBrands(): Observable<Brand[]> {
    return new Observable<Brand[]>(observer=> {
      observer.next(this.brands);
      observer.complete();

      return { unsubscribe() {} };
    })
  }
}
