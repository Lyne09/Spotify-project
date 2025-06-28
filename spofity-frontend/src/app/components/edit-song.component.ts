import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../services/song.service';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-edit-song',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  songId!: string;
  song: Song = {
    _id: '',
    title: '',
    artist: '',
    genre: '',
    duration: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.songId = this.route.snapshot.paramMap.get('id') || '';
    this.songService.getSongById(this.songId).subscribe({
      next: (data: Song) => this.song = data,
      error: err => console.error('Erreur chargement chanson :', err)
    });
  }

  updateSong(): void {
    this.songService.updateSong(this.songId, this.song).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error('Erreur mise à jour chanson :', err)
    });
  }
}
