import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { JsonService } from 'app/Routing_pages/Companies&Technologies/json.service';

@Component({
    selector: 'home',
    templateUrl: 'app/Routing_pages/Home/home.html',
    styleUrls: ['app/Routing_pages/Home/home.css'],
    directives: [ROUTER_DIRECTIVES],
    providers:[JsonService]
})
export class HomeComponent implements OnInit{ 
    public homeDescription;
    constructor(private jsonService: JsonService){};
    ngOnInit(){
        this.jsonService.getJsonData().subscribe(resJsonData=>{this.jsonData=Array.of(resJsonData);
            this.setHomeData(this.jsonData)});
    }
    setHomeData(jsonData){
        for(let data of jsonData) {
            this.homeDescription = data.description;
        }
    }
}