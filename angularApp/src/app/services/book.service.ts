import { Injectable, OnInit } from '@angular/core';
import { book } from '../models/book.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit {
  addr = "http://127.0.0.1:8080/api/v1/book"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }

  books: book[] = [];
  bookObservable = new Observable<book[]>();


  ngOnInit() {
    this.getbooks();
  }

  getbooks() {
    this.bookObservable = this.http.get<book[]>(this.addr);
  }

  getsinglebook(id: number) {
    return this.http.get<book>(this.addr + '/' + id);
  }

  createNewbook(obj: book) {
    return this.http.post<book>(this.addr, obj, this.httpOptions);
  }

  editOnebook(obj: book) {
    return this.http.put<book>(this.addr, obj, this.httpOptions);
  }

  removebook(obj: book) {
    return this.http.delete<book>(this.addr + '/' + obj.id, this.httpOptions);
  }

}

