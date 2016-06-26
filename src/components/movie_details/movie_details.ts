import { Component, Input, OnInit } from '@angular/core';
import { Movie, MoviesApi, RentalsApi } from '../../services/services';
import { MovieSummary } from '../movie_summary/movie_summary';
import { TitleizePipe } from '../../pipes/titleize';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { AppSettings } from '../../services/app_settings';

@Component({
  selector: 'movie-details',
  templateUrl: 'components/movie_details/movie_details.html',
  directives: [ROUTER_DIRECTIVES, MovieSummary],
  providers: [MoviesApi, RentalsApi],
  pipes: [TitleizePipe]
})
export class MovieDetails implements OnInit {
  movie: Movie;
  categoryType: string;

  constructor (
    private moviesApi: MoviesApi,
    private rentalsApi: RentalsApi,
    private settings: AppSettings,
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
      this.categoryType =  params['categoryType'];
      this.apiEndpoint().
        get({ type: this.categoryType }).
        then(movies => {
        this.movie = movies.find(movie => {
          return movie.id === params['id']
        });
      });
    });
  }

  goBack () {
    window.history.back();
  }
}
