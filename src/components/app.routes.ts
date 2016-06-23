import { RouterConfig} from '@angular/router';
import {App} from './app';
import {Movies} from './movies/movies';
import {MoviesList} from './movies_list/movies_list';
import {MovieDetails} from './movie_details/movie_details';

export const routes: RouterConfig = [
  { path: '', component: App },
  {
    path: 'movies', component: Movies,
    children: [
      { path: ':type', component: MoviesList },
      { path: ':type/:id', component: MovieDetails }
    ]
  }
];
