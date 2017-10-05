System.register(['@angular/core', 'app/Routing_pages/Companies&Technologies/json.service'], function(exports_1, context_1) {
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
    var core_1, json_service_1;
    var TechnologyDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (json_service_1_1) {
                json_service_1 = json_service_1_1;
            }],
        execute: function() {
            TechnologyDetailsComponent = (function () {
                function TechnologyDetailsComponent(jsonService) {
                    this.jsonService = jsonService;
                }
                ;
                TechnologyDetailsComponent.prototype.ngOnInit = function () {
                    this.technologyData = this.jsonService.getData('jsonData');
                };
                TechnologyDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/Routing_pages/Companies&Technologies/technologies/technologydetails/technology-details.html',
                        styleUrls: ['app/Routing_pages/Companies&Technologies/Companies&Technologies.css'],
                        providers: [json_service_1.JsonService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof json_service_1.JsonService !== 'undefined' && json_service_1.JsonService) === 'function' && _a) || Object])
                ], TechnologyDetailsComponent);
                return TechnologyDetailsComponent;
                var _a;
            }());
            exports_1("TechnologyDetailsComponent", TechnologyDetailsComponent);
        }
    }
});
//# sourceMappingURL=technology-details.component.js.map