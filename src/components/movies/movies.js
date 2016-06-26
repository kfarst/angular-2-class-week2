System.register(['@angular/core', '@angular/router', '../movies_list/movies_list', '../movie_details/movie_details', '../../services/app_settings', '../../services/services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movies_list_1, movie_details_1, app_settings_1, services_1;
    var Movies;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_list_1_1) {
                movies_list_1 = movies_list_1_1;
            },
            function (movie_details_1_1) {
                movie_details_1 = movie_details_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            Movies = (function () {
                function Movies(route, settings) {
                    this.route = route;
                    this.settings = settings;
                }
                Movies.prototype.ngOnInit = function () {
                    var _this = this;
                    this.
                        route.
                        params.
                        subscribe(function (params) {
                        _this.settings.resourceType = params['resourceType'];
                    });
                };
                Movies = __decorate([
                    core_1.Component({
                        selector: 'movies',
                        template: '<router-outlet></router-outlet>',
                        providers: [app_settings_1.AppSettings, services_1.MoviesApi, services_1.RentalsApi],
                        directives: [router_1.ROUTER_DIRECTIVES, movies_list_1.MoviesList, movie_details_1.MovieDetails]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, app_settings_1.AppSettings])
                ], Movies);
                return Movies;
            }());
            exports_1("Movies", Movies);
        }
    }
});
//# sourceMappingURL=movies.js.map