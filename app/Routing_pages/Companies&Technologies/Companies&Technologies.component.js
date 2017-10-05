System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Companies;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Companies = (function () {
                function Companies() {
                }
                Companies = __decorate([
                    core_1.Component({
                        selector: 'Companies&Technologies',
                        templateUrl: 'app/pages/Companies&Technologies/Companies&Technologies.html',
                        styleUrls: ['app/pages/Companies&Technologies/Companies&Technologies.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Companies);
                return Companies;
            }());
            exports_1("Companies", Companies);
             & TechnologiesComponent;
            {
                isCompanyListVisible = true;
                isTechnologyListVisible = false;
                constructor(private, router, router_1.Router);
                { }
                onSelectCompany();
                {
                    this.isCompanyListVisible = true;
                    this.isTechnologyListVisible = false;
                }
                onSelectTechnology();
                {
                    this.isTechnologyListVisible = true;
                    this.isCompanyListVisible = false;
                }
            }
        }
    }
});
//# sourceMappingURL=Companies&Technologies.component.js.map