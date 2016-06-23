System.register(['@angular/core', '../../services/services', '@angular/router', '../../pipes/titleize', '../movie_summary/movie_summary'], function(exports_1, context_1) {
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
    var core_1, services_1, router_1, titleize_1, movie_summary_1;
    var MoviesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (titleize_1_1) {
                titleize_1 = titleize_1_1;
            },
            function (movie_summary_1_1) {
                movie_summary_1 = movie_summary_1_1;
            }],
        execute: function() {
            MoviesList = (function () {
                function MoviesList(moviesApi, rentalsApi, route) {
                    this.moviesApi = moviesApi;
                    this.rentalsApi = rentalsApi;
                    this.route = route;
                }
                MoviesList.prototype.apiEndpoint = function () {
                    return window.location.pathname.match('movies') ? this.moviesApi : this.rentalsApi;
                };
                MoviesList.prototype.ngOnInit = function () {
                    var _this = this;
                    this.categoryType = this.route.params.value['type'];
                    this.apiEndpoint().get({ type: this.categoryType }).then(function (movies) { return _this.movies = movies; });
                };
                MoviesList = __decorate([
                    core_1.Component({
                        selector: 'movies-list',
                        templateUrl: 'components/movies_list/movies_list.html',
                        directives: [movie_summary_1.MovieSummary, router_1.ROUTER_DIRECTIVES],
                        pipes: [titleize_1.TitleizePipe],
                        providers: [services_1.MoviesApi, services_1.RentalsApi]
                    }), 
                    __metadata('design:paramtypes', [services_1.MoviesApi, services_1.RentalsApi, router_1.ActivatedRoute])
                ], MoviesList);
                return MoviesList;
            }());
            exports_1("MoviesList", MoviesList);
        }
    }
});
//# sourceMappingURL=movies_list.js.map