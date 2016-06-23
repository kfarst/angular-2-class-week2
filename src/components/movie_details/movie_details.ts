import { Component, Input, OnInit } from '@angular/core';
import { Movie, MoviesApi, RentalsApi } from '../../services/services';
import { MovieSummary } from '../movie_summary/movie_summary';
import { TitleizePipe } from '../../pipes/titleize';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

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

  constructor (private moviesApi: MoviesApi, private rentalsApi: RentalsApi, private route: ActivatedRoute) { }

  private apiEndpoint (): any {
    return window.location.pathname.match('movies') ? this.moviesApi : this.rentalsApi;
  }

  ngOnInit () {
    this.categoryType = this.route.params.value['type'];
    this.apiEndpoint().get({ type: this.categoryType }).then(movies => {
      this.movie = movies.find(movie => {
        return movie.id === this.route.params.value['id']
      });
    });
  }

  goBack () {
    window.history.back();
  }
}
