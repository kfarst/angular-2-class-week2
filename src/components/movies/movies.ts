import { Component } from '@angular/core';

import {
  ROUTER_DIRECTIVES,
  Router,
} from '@angular/router';

import { MoviesList } from '../movies_list/movies_list';
import { MovieDetails } from '../movie_details/movie_details';

@Component({
  selector: 'movies',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, MoviesList, MovieDetails]
})
export class Movies {
  categoryType: string;

  constructor (private router: Router) {
  }
}

