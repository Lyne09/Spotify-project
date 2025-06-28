import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private apiUrl = 'http://localhost:3000/api/songs';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl);
  }

  getSongById(id: string): Observable<Song> {
    return this.http.get<Song>(`${this.apiUrl}/${id}`);
  }

  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl, song);
  }

  updateSong(id: string, song: Song): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, song);
  }

  deleteSong(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
