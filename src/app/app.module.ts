import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from  './avatar/avatar.component';
import { BrandComponent } from  './brand/brand.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { MyMusicComponent } from './pages/my-music/my-music.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './pages/blog/blog.component';

const MATERIAL = [
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BrandComponent,
    HeaderNavComponent,
    HomeComponent,
    MyMusicComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ...MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
