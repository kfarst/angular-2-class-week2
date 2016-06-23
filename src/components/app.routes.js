System.register(['./app', './movies/movies', './movies_list/movies_list', './movie_details/movie_details'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1, movies_1, movies_list_1, movie_details_1;
    var routes;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (movies_1_1) {
                movies_1 = movies_1_1;
            },
            function (movies_list_1_1) {
                movies_list_1 = movies_list_1_1;
            },
            function (movie_details_1_1) {
                movie_details_1 = movie_details_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: app_1.App },
                {
                    path: 'movies', component: movies_1.Movies,
                    children: [
                        { path: ':type', component: movies_list_1.MoviesList },
                        { path: ':type/:id', component: movie_details_1.MovieDetails }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map