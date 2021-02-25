import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyMusicComponent } from './pages/my-music/my-music.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {path: 'music', component: MyMusicComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
