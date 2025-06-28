import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SongService } from '../../services/song.service';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-add-song',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent {
  newSong: Song = {
    title: '',
    artist: '',
    genre: '',
    duration: 0
  };

  constructor(private songService: SongService) {}

  addSong() {
    console.log('📤 Formulaire soumis avec :', this.newSong); 

    this.songService.addSong(this.newSong).subscribe({
      next: (response) => {
        console.log('✅ Chanson ajoutée', response);
        this.newSong = { title: '', artist: '', genre: '', duration: 0 };
      },
      error: (err) => {
        console.error('❌ Erreur ajout chanson', err);
      }
    });
  }
}
