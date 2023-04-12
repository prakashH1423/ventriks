import { Component } from '@angular/core';
import { UniversityService } from './university.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ventriks-fe';
  indianUniversities: any[];
  universitiesTotal: any;
  chineseUniversities: any;
  frenchUniversities: any;
  canadianUniversities: any;
  indianUniversitiesSliced: any[];
  pageCounter = 1;
  countries = ["India", "China", "France", "Canada"];
  filteredUniversities: any;
  selectedCountry: any;
  constructor( private universityService: UniversityService){
  }

  ngOnInit(){
    this.universityService.getUniversities().subscribe((response)=>{
      this.universitiesTotal = response;
      this.countrySelect("India");
    });
  }

  countrySelect(country){
    this.selectedCountry = country;
    this.filteredUniversities =  this.universitiesTotal.filter((item)=>{
      if(item.country === country){
        return item;
      }
    }).slice(0,10);
  }

  filterUniversities(text){
    console.log(text); 
    this.filteredUniversities = this.universitiesTotal.filter((item)=>{
      if(item.country === this.selectedCountry){
        if(item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1){
          return item;
        }
      }
    }).slice(0,10);

  }

}
