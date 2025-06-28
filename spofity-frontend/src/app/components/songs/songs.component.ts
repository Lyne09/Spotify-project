import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Song } from '../../models/song.model';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getSongs().subscribe({
      next: (data) => {
        this.songs = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des chansons', err);
      }
    });
  }

  deleteSong(id: string) {
    if (confirm('Tu es sûr(e) de vouloir supprimer cette chanson ?')) {
      this.songService.deleteSong(id).subscribe({
        next: () => {
          this.songs = this.songs.filter(song => song._id !== id);
          console.log('Chanson supprimée avec succès.');
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la chanson', err);
        }
      });
    }
  }
}
