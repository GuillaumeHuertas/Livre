import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {

  constructor(private route: Router) { }

  retour() {
    this.route.navigate(['accueil']);
  }
}

