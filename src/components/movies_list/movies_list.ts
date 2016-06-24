import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Movie, MoviesApi, RentalsApi } from '../../services/services';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { TitleizePipe } from '../../pipes/titleize';
import { Movies } from '../movies/movies';
import { MovieSummary } from '../movie_summary/movie_summary';
import { AppSettings } from '../../services/app_settings';

@Component({
  selector: 'movies-list',
  templateUrl: 'components/movies_list/movies_list.html',
  directives: [MovieSummary, ROUTER_DIRECTIVES],
  pipes: [TitleizePipe],
  providers: [MoviesApi, RentalsApi]
})
export class MoviesList implements OnInit {
  movies: Movie[];
  categoryType: string;
  settings: AppSettings = AppSettings.getInstance();

  constructor (
    private moviesApi: MoviesApi,
    private rentalsApi: RentalsApi,
    private route: ActivatedRoute
  ) {}

  private apiEndpoint (): any {
    return this.settings.resourceType.match('movies') ?
      this.moviesApi :
      this.rentalsApi;
  }

  ngOnInit () {
    this.
      route.
      params.
      subscribe(params => {
      this.categoryType = params['categoryType'];
      this.apiEndpoint().
        get({ type: this.categoryType }).
        then(movies => this.movies = movies);
    });
  }
}

