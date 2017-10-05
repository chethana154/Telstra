import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Companies&Technologies',
  templateUrl: 'app/pages/Companies&Technologies/Companies&Technologies.html',
  styleUrls: ['app/pages/Companies&Technologies/Companies&Technologies.css'],
})
export class Companies&TechnologiesComponent {
    private isCompanyListVisible =true;
    private isTechnologyListVisible = false;
    constructor(private router : Router){}
    onSelectCompany(){
        this.isCompanyListVisible = true;
        this.isTechnologyListVisible = false;
    }
    onSelectTechnology(){
        this.isTechnologyListVisible = true;
        this.isCompanyListVisible = false;
    }
}