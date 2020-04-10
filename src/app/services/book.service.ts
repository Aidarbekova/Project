import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/Book'
import { Order } from '../interfaces/Order'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  private url = 'assets/books.json'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }

  orderBook(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order, this.httpHeaders)
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, this.httpHeaders)
  }
}
