System.register(['@angular/router', './Routing_pages/Companies&Technologies/Companies&Technologies.component', './Routing_pages/home/home.component', './Routing_pages/Companies&Technologies/companies/company-list.component', './Routing_pages/Companies&Technologies/technologies/technology-list.component', './Routing_pages/Companies&Technologies/technologies/technologydetails/technology-details.component', './Routing_pages/Companies&Technologies/companies/companydetails/company-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, Companies_Technologies_component_1, home_component_1, company_list_component_1, technology_list_component_1, technology_details_component_1, company_details_component_1;
    var routes, myRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Companies_Technologies_component_1_1) {
                Companies_Technologies_component_1 = Companies_Technologies_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (company_list_component_1_1) {
                company_list_component_1 = company_list_component_1_1;
            },
            function (technology_list_component_1_1) {
                technology_list_component_1 = technology_list_component_1_1;
            },
            function (technology_details_component_1_1) {
                technology_details_component_1 = technology_details_component_1_1;
            },
            function (company_details_component_1_1) {
                company_details_component_1 = company_details_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'categories', component: Companies_Technologies_component_1.AboutComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'companies', component: company_list_component_1.CompanyListComponent },
                { path: 'technologies', component: technology_list_component_1.TechnologyListComponent },
                { path: 'companyDetails', component: company_details_component_1.CompanyDetailsComponent },
                { path: 'technologyDetails', component: technology_details_component_1.TechnologyDetailsComponent }
            ];
            exports_1("myRouterProviders", myRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map