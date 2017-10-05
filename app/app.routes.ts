import { provideRouter, RouterConfig }  from '@angular/router';
import { AboutComponent } from './Routing_pages/Companies&Technologies/Companies&Technologies.component';
import { HomeComponent } from './Routing_pages/home/home.component';
import { CompanyListComponent } from './Routing_pages/Companies&Technologies/companies/company-list.component';
import { TechnologyListComponent } from './Routing_pages/Companies&Technologies/technologies/technology-list.component';
import { TechnologyDetailsComponent } from './Routing_pages/Companies&Technologies/technologies/technologydetails/technology-details.component';
import { CompanyDetailsComponent } from './Routing_pages/Companies&Technologies/companies/companydetails/company-details.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'categories', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'companies', component: CompanyListComponent },
    { path: 'technologies', component: TechnologyListComponent },
    { path: 'companyDetails', component: CompanyDetailsComponent },
    { path: 'technologyDetails', component: TechnologyDetailsComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];

