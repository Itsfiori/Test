import { json } from 'stream/consumers';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url='https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  Apidata: any;

  constructor(private http:HttpClient) { 

 
    
  }
  getHeroes() {
    return this.http.get(this.url)
  }
 
  // async fetchaData() {
    
  //     let x =  await fetch('https://jsonplaceholder.typicode.com/todos/2')
      
  //     let data = await x.json()
  //     this.Apidata= data
  //     console.log(this.Apidata);
  //   }
  

getdata():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}

}
