System.register(['angular2/core', 'angular2/src/core/linker', './login/login'], function(exports_1, context_1) {
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
    var core_1, linker_1, core_2, login_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (linker_1_1) {
                linker_1 = linker_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dcl, injector) {
                    this.dcl = dcl;
                    this.injector = injector;
                    this.logo = "heritage.png";
                }
                AppComponent.prototype.clicked = function (event, target) {
                    event.preventDefault();
                    if (target === "login") {
                        this.dcl.loadAsRoot(login_1.LoginComponent, '#login-window', this.injector).then(function (ref) {
                            document.querySelector("#login-window").classList.toggle("hide");
                            // _children.push(ref);
                            //console.log(_children);
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/core/main-page.html'
                    }), 
                    __metadata('design:paramtypes', [linker_1.DynamicComponentLoader, core_2.Injector])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// angular2@2.0.0-beta.12
