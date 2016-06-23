System.register(['@angular/core', '../../services/services', '../movie_summary/movie_summary', '../../pipes/titleize', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, services_1, movie_summary_1, titleize_1, router_1;
    var MovieDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (movie_summary_1_1) {
                movie_summary_1 = movie_summary_1_1;
            },
            function (titleize_1_1) {
                titleize_1 = titleize_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MovieDetails = (function () {
                function MovieDetails(moviesApi, rentalsApi, route) {
                    this.moviesApi = moviesApi;
                    this.rentalsApi = rentalsApi;
                    this.route = route;
                }
                MovieDetails.prototype.apiEndpoint = function () {
                    return window.location.pathname.match('movies') ? this.moviesApi : this.rentalsApi;
                };
                MovieDetails.prototype.ngOnInit = function () {
                    var _this = this;
                    this.categoryType = this.route.params.value['type'];
                    this.apiEndpoint().get({ type: this.categoryType }).then(function (movies) {
                        _this.movie = movies.find(function (movie) {
                            return movie.id === _this.route.params.value['id'];
                        });
                    });
                };
                MovieDetails.prototype.goBack = function () {
                    window.history.back();
                };
                MovieDetails = __decorate([
                    core_1.Component({
                        selector: 'movie-details',
                        templateUrl: 'components/movie_details/movie_details.html',
                        directives: [router_1.ROUTER_DIRECTIVES, movie_summary_1.MovieSummary],
                        providers: [services_1.MoviesApi, services_1.RentalsApi],
                        pipes: [titleize_1.TitleizePipe]
                    }), 
                    __metadata('design:paramtypes', [services_1.MoviesApi, services_1.RentalsApi, router_1.ActivatedRoute])
                ], MovieDetails);
                return MovieDetails;
            }());
            exports_1("MovieDetails", MovieDetails);
        }
    }
});
//# sourceMappingURL=movie_details.js.map