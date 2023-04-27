import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-error404',
  templateUrl: './pag-error404.component.html',
  styleUrls: ['./pag-error404.component.css']
})
export class PagError404Component {
  constructor(private router: Router) {}

goToHomePage() {
  this.router.navigate(['/']);
}
}
