import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/User'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private url = ''
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Login(user: User): Observable<User> {
    return this.http.post<User>(this.url+'login', user, this.httpHeaders)
  }

  Register(user: User): Observable<User> {
    return this.http.post<User>(this.url+'register', user, this.httpHeaders)
  }
}
