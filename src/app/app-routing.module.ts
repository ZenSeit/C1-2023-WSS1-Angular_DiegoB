import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const routes: Routes = [
 
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'artist',
    component: ArtistListComponent
  },
  {
    path: 'album',
    component: AlbumListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
