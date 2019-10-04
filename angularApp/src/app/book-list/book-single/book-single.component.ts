import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { book } from '../../models/book.model'

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss']
})
export class BookSingleComponent implements OnInit {
  book: book;
  id: any;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.book = new book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getsinglebook(this.id).subscribe(book => this.book = book)
  }

  onBack() {
    this.router.navigate(['/book']);
  }

  onEdit() {
    this.router.navigate(['/book', 'edit', this.id]);
  }

  onDelete() {
    if (window.confirm('Etes vous sur ?')) {
      this.bookService.removebook(this.book).subscribe(data =>{this.router.navigate(['/book']);});
    };
  }
}

