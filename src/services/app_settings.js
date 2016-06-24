System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppSettings = (function () {
                function AppSettings() {
                    if (!AppSettings.isCreating) {
                        throw new Error("You can't call new in App Settings instances!");
                    }
                }
                AppSettings.getInstance = function () {
                    if (AppSettings.instance == null) {
                        AppSettings.isCreating = true;
                        AppSettings.instance = new AppSettings();
                        AppSettings.isCreating = false;
                    }
                    return AppSettings.instance;
                };
                Object.defineProperty(AppSettings.prototype, "resourceType", {
                    get: function () {
                        return this._resourceType;
                    },
                    set: function (name) {
                        this._resourceType = name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppSettings.prototype, "API_KEY", {
                    get: function () {
                        return 'your key here';
                    },
                    enumerable: true,
                    configurable: true
                });
                AppSettings.isCreating = false;
                AppSettings = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppSettings);
                return AppSettings;
            }());
            exports_1("AppSettings", AppSettings);
        }
    }
});
//# sourceMappingURL=app_settings.js.map