import { HTTP_PROVIDERS } from '@angular/http';
import { upgradeAdapter } from '../upgrade_adapter';
import { MoviesApi, RentalsApi } from '../services/services';

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(MoviesApi);
upgradeAdapter.addProvider(RentalsApi);

angular.module('app', [
  'ngComponentRouter',
  'ngResource',
  'app.filters',
  'app.components'
])

.value('$routerRootComponent', 'app')

.service('MoviesApi', upgradeAdapter.downgradeNg2Provider(MoviesApi))
.service('RentalsApi', upgradeAdapter.downgradeNg2Provider(RentalsApi))

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
