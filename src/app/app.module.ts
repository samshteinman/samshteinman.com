import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from  './avatar/avatar.component';
import { BrandComponent } from  './brand/brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BrandComponent,
    HeaderNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
