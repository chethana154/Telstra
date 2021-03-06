import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'app/Routing_pages/Companies&Technologies/json.service';

@Component({
  selector: 'technology-list',
  templateUrl: 'app/Routing_pages/Companies&Technologies/technologies/technology-list.html',
  styleUrls: ['app//Routing_pages/Companies&Technologies/Companies&Technologies.css'],
  providers:[JsonService]
})
export class TechnologyListComponent implements OnInit{
    public jsonData=[];
    public technologyList = [];
    constructor(private router: Router, private jsonService: JsonService){};
    onRowClick(json){
        this.jsonService.setData('jsonData', json);
        this.router.navigateByUrl('/technologyDetails');
    } 
    ngOnInit(){
        this.jsonService.getJsonData().subscribe(resJsonData=>{this.jsonData=Array.of(resJsonData);
            this.setTableData(this.jsonData)});
    }
    
    setTableData(jsonData){
     for(let data of jsonData) {
          for(let finalData of data.rows){
           if( finalData.category == "Technologies" )
                this.technologyList.push({
                    title : finalData.title,
                    image : finalData.imageHref,
                    url: finalData.url,
                    description: finalData.description
                })
          }
        }
    }
}