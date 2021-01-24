import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from  './avatar/avatar.component';
import { BrandComponent } from  './brand/brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    ...MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
