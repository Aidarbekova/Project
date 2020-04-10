import { Injectable } from '@angular/core';
import { Genre } from '../interfaces/Genre'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  private url = 'assets/genres.json'

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.url)
  }

}
