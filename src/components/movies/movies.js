angular.module('app.components.movies', [])
.component('movies', {
  template: '<ng-outlet><ng-outlet>',
  bindings: { $router: '<' },
  $routeConfig: [
    { component: 'moviesList', name: 'MoviesList', path: '/:type' },
    { component: 'movieDetails', name: 'MovieDetails', path: '/:type/:movieID' }
  ],
  controller: function () {
    function setResourceType (next) {
      next.routeData.data['resourceType'] = next.urlPath;
    }

    this.$routerOnActivate = function (next) {
      setResourceType(next);
    };

    this.$routerOnReuse = function (next) {
      setResourceType(next);
    };
  }
})

.component('moviesList', {
  templateUrl: 'components/movies/moviesList.html',
  bindings: { $router: '<' },
  controller: function ($injector, $filter) {
    var ctrl = this;
    ctrl.view = {};

    this.$routerOnActivate = function (next) {
      ctrl.view.type = next.params.type;

      return $injector.get(`${$filter('titleize')(next.routeData.data.resourceType)}Api`).
        get({ type: ctrl.view.type.replace('-', '_') }).
        $promise.
        then(function (response) {
          ctrl.movies = response.movies;
        });
    };

    this.actions = {
      goToDetails: function (movie) {
        ctrl.$router.navigate(['MovieDetails', { type: ctrl.view.type, movieID: movie.id }]);
      }
    };
  }
})

.component('movieDetails', {
  templateUrl: 'components/movies/movieDetails.html',
  bindings: { $router: '<' },
  controller: function ($injector, $filter) {
    var ctrl = this;
    ctrl.view = {};

    this.$routerOnActivate = function (next) {
      ctrl.view.type = next.params.type;

      return $injector.get(`${$filter('titleize')(next.routeData.data.resourceType)}Api`).
        get({ type: ctrl.view.type.replace('-', '_') }).
        $promise.
        then(function (response) {
          ctrl.movie = _.find(response.movies, { id: next.params.movieID });
        });
    };
  }
});
