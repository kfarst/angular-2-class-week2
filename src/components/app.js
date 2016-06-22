System.register(['@angular/http', '../upgrade_adapter', '../services/services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, upgrade_adapter_1, services_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.upgradeAdapter.addProvider(services_1.MoviesApi);
            upgrade_adapter_1.upgradeAdapter.addProvider(services_1.RentalsApi);
            angular.module('app', [
                'ngComponentRouter',
                'ngResource',
                'app.filters',
                'app.components'
            ])
                .value('$routerRootComponent', 'app')
                .service('MoviesApi', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(services_1.MoviesApi))
                .service('RentalsApi', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(services_1.RentalsApi))
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