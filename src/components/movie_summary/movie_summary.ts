import { Component, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CastAndCharacters } from '../cast_and_characters/cast_and_characters';
import { Movie } from '../../services/services';
import { TitleizePipe } from '../../pipes/titleize';
import { FormatRatingPipe } from '../../pipes/format_rating';
import { ImdbUrlPipe } from '../../pipes/imdb_url';
import { RuntimePipe } from '../../pipes/runtime';
import { KeysPipe } from '../../pipes/keys';

@Component({
  selector: 'movie-summary',
  templateUrl: 'components/movie_summary/movie_summary.html',
  directives: [ROUTER_DIRECTIVES, CastAndCharacters],
  pipes: [TitleizePipe, FormatRatingPipe, ImdbUrlPipe, RuntimePipe, KeysPipe]
})
export class MovieSummary {
  @Input() movie: Movie;
  @Input() categoryType: string;
  @Input() showMoreInfo: boolean = false;

  view: any = {
    showMoreInfo: this.showMoreInfo
  };

  constructor (private router: Router) {
  }

  private movieDetailRoute (): (string | number)[] {
    let movieType: string = window.location.pathname.match('movies') ? 'movies' : 'rentals';
    return [`/${movieType}`, this.categoryType, this.movie.id];
  }

  actions: Object = {
    goToMovieDetails: () => this.router.navigate(this.movieDetailRoute())
  }
}

