System.register(['@angular/core', './app_settings', 'rxjs/Rx', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_settings_1, Rx_1, http_1;
    var BaseResource, MoviesApi, RentalsApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            BaseResource = (function () {
                function BaseResource(settings) {
                    this.settings = settings;
                }
                BaseResource.prototype.url = function (resourceType, categoryType) {
                    return "/api/public/v1.0/lists/" + resourceType + "/" + categoryType + ".json?apikey=" + this.settings.API_KEY;
                };
                BaseResource.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Rx_1.Observable.throw(error);
                };
                return BaseResource;
            }());
            MoviesApi = (function (_super) {
                __extends(MoviesApi, _super);
                function MoviesApi(http, settings) {
                    _super.call(this, settings);
                    this.http = http;
                }
                MoviesApi.prototype.get = function (options) {
                    return this.http.get(this.url('movies', options.type.replace('-', '_'))).
                        map(function (res) { return res.json(); }).
                        catch(this.handleError);
                };
                MoviesApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_settings_1.AppSettings])
                ], MoviesApi);
                return MoviesApi;
            }(BaseResource));
            exports_1("MoviesApi", MoviesApi);
            RentalsApi = (function (_super) {
                __extends(RentalsApi, _super);
                function RentalsApi(http, settings) {
                    _super.call(this, settings);
                    this.http = http;
                }
                RentalsApi.prototype.get = function (options) {
                    return this.http.get(this.url('dvds', options.type.replace('-', '_'))).
                        map(function (res) { return res.json(); }).
                        catch(this.handleError);
                };
                RentalsApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_settings_1.AppSettings])
                ], RentalsApi);
                return RentalsApi;
            }(BaseResource));
            exports_1("RentalsApi", RentalsApi);
        }
    }
});
//# sourceMappingURL=services.js.map