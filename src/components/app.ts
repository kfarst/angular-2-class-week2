import { HTTP_PROVIDERS } from '@angular/http';
import { upgradeAdapter } from '../upgrade_adapter';
import { MoviesApi, RentalsApi } from '../services/services';
import { TitleizePipe } from '../pipes/titleize';
import { FormatRatingPipe } from '../pipes/format_rating';
import { ImdbUrlPipe } from '../pipes/imdb_url';
import { RuntimePipe } from '../pipes/runtime';
import { CastAndCharacters } from './cast_and_characters/cast_and_characters';

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(MoviesApi);
upgradeAdapter.addProvider(RentalsApi);

angular.module('app', [
  'ngComponentRouter',
  'ngResource',
  'app.components'
])

.value('$routerRootComponent', 'app')

.service('MoviesApi', upgradeAdapter.downgradeNg2Provider(MoviesApi))
.service('RentalsApi', upgradeAdapter.downgradeNg2Provider(RentalsApi))
.filter('titleize', function () {
  return (new TitleizePipe()).transform;
})
.filter('formatRating', function () {
  return (new FormatRatingPipe()).transform;
})
.filter('imdbUrl', function () {
  return (new ImdbUrlPipe()).transform;
})
.filter('runtime', function () {
  return (new RuntimePipe()).transform;
})
.directive('castAndCharacters', upgradeAdapter.downgradeNg2Component(CastAndCharacters))

.component('app', {
  template: '<ng-outlet><ng-outlet>',
  bindings: { $router: '<' },
  $routeConfig: [
    { component: 'app', name: 'App', path: '/', useAsDefault: true },
    { component: 'movies', name: 'Movies', path: '/movies/...' },
    { component: 'movies', name: 'Rentals', path: '/rentals/...' }
  ],
  controller: function () {
    this.$routerOnActivate = function () {
      this.$router.navigate(['./Movies', 'MoviesList', { type: 'upcoming' }]);
    };
  }
});

upgradeAdapter.bootstrap(document.body, ['app']);
