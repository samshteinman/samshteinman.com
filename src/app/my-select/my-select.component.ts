import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss']
})
export class MySelectComponent implements OnInit {
  @Input() selection: {value:string, display:string};
  @Input() options:{value:string, display:string}[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChanged(option: any) {
    this.selection = option
  }
}
