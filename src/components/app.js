System.register(['../upgrade_adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1;
    return {
        setters:[
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
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
            upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map