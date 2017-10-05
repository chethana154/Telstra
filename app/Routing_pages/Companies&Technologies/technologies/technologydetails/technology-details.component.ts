import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { JsonService } from 'app/Routing_pages/Companies&Technologies/json.service';

@Component({
  templateUrl: 'app/Routing_pages/Companies&Technologies/technologies/technologydetails/technology-details.html',
  styleUrls: ['app/Routing_pages/Companies&Technologies/Companies&Technologies.css'],
  providers:[JsonService]
})
export class TechnologyDetailsComponent implements OnInit{
    constructor( private jsonService: JsonService) { };
    ngOnInit() {
        this.technologyData = this.jsonService.getData('jsonData');
  }
}