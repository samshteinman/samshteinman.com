import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


const MATERIAL = [
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL,
    CommonModule
  ],
  exports: [
    ...MATERIAL
  ]
})
export class SharedModule { }
