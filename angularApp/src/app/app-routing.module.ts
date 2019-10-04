import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { BookSingleComponent } from './book-list/book-single/book-single.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { NotfoundComponent} from './notfound/notfound.component'

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'book', component: BookListComponent },
  { path: 'book/new', component: BookFormComponent },
  { path: 'book/view/:id', component: BookSingleComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: '', component: AccueilComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

