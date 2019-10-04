
import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  bookNewForm = this.formBuilder.group({

titre : ['', Validators.required],
auteur : ['', Validators.required],
année : ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
    private service: BookService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSavebook() {
const titre = this.bookNewForm.get('titre').value;
const auteur = this.bookNewForm.get('auteur').value;
const année = this.bookNewForm.get('année').value;

    const newbook = new book();
newbook.titre = titre;
newbook.auteur = auteur;
newbook.année = année;
this.service.createNewbook(newbook).subscribe(data => { this.router.navigate(['/book']); });

  }

  onAnnuler() {
    this.router.navigate(['/book']);
  }

}
