import { Routes } from '@angular/router';
import { SongsComponent } from './components/songs/songs.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { EditSongComponent } from './components/edit-song.component';

export const routes: Routes = [
  { path: '', component: SongsComponent },
  { path: 'add', component: AddSongComponent },
  { path: 'edit/:id', component: EditSongComponent }
];
