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
  private url = 'http://localhost:8000/api/'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + 'books/')
  }
  getBooksByCategory(category): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + 'genres/' + category + '/books/')
  }
  getBook(id): Observable<Book> {
    return this.http.get<Book>(this.url + 'books/' + id + '/')
  }
  orderBook(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url + 'order/', order, this.httpHeaders)
  }
  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url + 'books/', book, this.httpHeaders)
  }
  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + 'order/' + id + '/')
  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'order/')
  }
  getOrder(id): Observable<any> {
    return this.http.get<any>(this.url + 'order/' + id + '/')
  }
  updateOrder(order): Observable<any> {
    return this.http.put(this.url + 'order/' + order.id + '/', order, this.httpHeaders)
  }
}
