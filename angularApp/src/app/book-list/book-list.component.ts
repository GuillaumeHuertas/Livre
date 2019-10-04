import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private router : Router, private service : BookService) { }

bookObservable: Observable<book[]>;
books: book[];

  ngOnInit() {
    this.service.getbooks();
    this.service.bookObservable.subscribe(books => this.books = books);
  }

  onNewbook() {
    this.router.navigate(['/book', 'new']);
  }

  onViewbook(id: number) {
    this.router.navigate(['/book', 'view', id]);
  }
}
