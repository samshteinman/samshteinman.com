import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './models/brand';
import { BrandsService } from './services/brands.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  brands: Brand[];

  constructor(private brandsService: BrandsService) {
    this.brands = brandsService.getBrands();
  }
}
