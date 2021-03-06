import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'pgn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  person$: Observable<Person>;

  constructor(private service: PersonService) { }

  ngOnInit(): void {
    this.person$ = this.service.randomUser$;
    this.refresh();
  }

  refresh() {
    this.service.getRandomUser();
  }
}
