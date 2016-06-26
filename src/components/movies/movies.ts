import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MoviesList } from '../movies_list/movies_list';
import { MovieDetails } from '../movie_details/movie_details';
import { AppSettings } from '../../services/app_settings';

@Component({
  selector: 'movies',
  template: '<router-outlet></router-outlet>',
  providers: [AppSettings],
  directives: [ROUTER_DIRECTIVES, MoviesList, MovieDetails]
})
export class Movies implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private settings: AppSettings
  ) {}

  ngOnInit () {
    this.
      route.
      params.
      subscribe(params => {
      this.settings.resourceType = params['resourceType'];
    });
  }
}
