import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from  './avatar/avatar.component';
import { BrandComponent } from  './brand/brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MySelectComponent } from './my-select/my-select.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BrandComponent,
    MySelectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
