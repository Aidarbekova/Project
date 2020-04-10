import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/Book'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  private url = 'assets/books.json'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }
}
