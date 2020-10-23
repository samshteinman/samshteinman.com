import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Input() destinationUrl : string;
  @Input() brandPicturePath : string;

  constructor() { }

  ngOnInit(): void {
  }

}
