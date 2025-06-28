import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService } from '../services/song.service';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  private static loaded = false;

ngOnInit(): void {
  if (SongsComponent.loaded) {
    return;
  }
  SongsComponent.loaded = true;

  this.songService.getSongs().subscribe({
    next: (data: Song[]) => {
      this.songs = data;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des chansons', err);
    }
  });
}

  songs: Song[] = [];

  constructor(private songService: SongService) {}


  deleteSong(id: string): void {
    this.songService.deleteSong(id).subscribe({
      next: () => {
        // Mise à jour de la liste après suppression
        this.songs = this.songs.filter(song => song._id !== id);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression :', err);
      }
    });
  }
}
