angular.module('app.components.movieSummary', [])
.component('movieSummary', {
  templateUrl: 'components/movieSummary/movieSummary.html',
  bindings: { movie: '<', detailsLink: '&', showMoreInfo: '@' },
  controller: function () {
    var ctrl = this;

    ctrl.view = {
      showMoreInfo: ctrl.showMoreInfo === 'true'
    };

    ctrl.actions = {
      goToMovieDetails: function () {
        return ctrl.detailsLink()(ctrl.movie);
      }
    };
  }
});
