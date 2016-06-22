import { upgradeAdapter } from '../upgrade_adapter';

angular.module('app', [
  'ngComponentRouter',
  'ngResource',
  'app.filters',
  'app.services',
  'app.values',
  'app.components'
])

.value('$routerRootComponent', 'app')

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
