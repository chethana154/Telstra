import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { myRouterProviders } from './app.routes';
import { HTTP_PROVIDERS, HttpModule }    from '@angular/http';
import { NgModule }    from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyListComponent } from './Routing_pages/Companies&Technologies/companies/company-list.component';
import { JsonService } from 'app/Routing_pages/Companies&Technologies/json.service';

bootstrap(AppComponent, [myRouterProviders, HTTP_PROVIDERS])
@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule
    ],
    declarations: [ 
        AppComponent,
        CompanyListComponent
    ],
    providers: [
        JsonService
    ]
    bootstrap: [
        AppComponent,
        myRouterProviders
    ]
})
export class Main { }