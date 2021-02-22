import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  brands: Brand[];

  constructor(private brandsService: BrandsService) {
    this.brands = brandsService.getBrands();
  }

}
