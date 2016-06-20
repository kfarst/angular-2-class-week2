angular.module('app.components.castAndCharacters', [])
.component('castAndCharacters', {
  templateUrl: 'components/castAndCharacters/castAndCharacters.html',
  bindings: { list: '<' },
  controller: function () {
    this.$routerOnActivate = function () {
      this.$router.navigate(['./Movies', 'MoviesList', { type: 'upcoming' }]);
    };
  }
});
