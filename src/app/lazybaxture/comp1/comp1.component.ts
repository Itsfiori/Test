import { json } from 'stream/consumers';
import { Component } from '@angular/core';
import { retry, Observable } from 'rxjs';
import { ApicallService } from '../../apicall.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
// import { ParentComponent } from '../../parent/parent.component';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  obje: any;
  apiData: any;
  // apidatacompnayId: any = {
  //   data: [
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2021,
  //       Year: '2021',
  //       Population: 329725481,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2020,
  //       Year: '2020',
  //       Population: 326569308,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2019,
  //       Year: '2019',
  //       Population: 324697795,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2018,
  //       Year: '2018',
  //       Population: 322903030,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2017,
  //       Year: '2017',
  //       Population: 321004407,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2016,
  //       Year: '2016',
  //       Population: 318558162,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2015,
  //       Year: '2015',
  //       Population: 316515021,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2014,
  //       Year: '2014',
  //       Population: 314107084,
  //       'Slug Nation': 'united-states',
  //     },
  //     {
  //       'ID Nation': '01000US',
  //       Nation: 'United States',
  //       'ID Year': 2013,
  //       Year: '2013',
  //       Population: 311536594,
  //       'Slug Nation': 'united-states',
  //     },
  //   ],
  //   source: [
  //     {
  //       measures: ['Population'],
  //       annotations: {
  //         source_name: 'Census Bureau',
  //         source_description:
  //           'The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.',
  //         dataset_name: 'ACS 5-year Estimate',
  //         dataset_link: 'http://www.census.gov/programs-surveys/acs/',
  //         table_id: 'B01003',
  //         topic: 'Diversity',
  //         subtopic: 'Demographics',
  //       },
  //       name: 'acs_yg_total_population_5',
  //       substitutions: [],
  //     },
  //   ],
  // };

  constructor(private http: ApicallService) {
    




  }
  ngOnInit() {
    var res = this.getdata1();
  console.log(res,'kjgj');
  
  }

getdata(){

this.http.getdata()
// .subscribe(productdata=> this.apiData = productdata)
.subscribe((productdata)=>{
this.apiData=productdata

})
console.log(this.apiData);

}

async getdata1(){
      let x = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = x.json();
      console.log(data)
      this.apiData=data

return this.apiData;
}

}
