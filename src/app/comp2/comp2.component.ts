import { join } from 'node:path';
import { Component } from '@angular/core';
import { rejects } from 'assert';
import { error, log } from 'console';
import { response } from 'express';
import { resolve } from 'path';
import { json } from 'stream/consumers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  Apidata: any;

  // async fetchaData() {
    
  //   let x=  await fetch('https://jsonplaceholder.typicode.com/todos/2')
    
  //   let data = await x.json()
  //   this.Apidata= data
  //   console.log(this.Apidata);
  // }

    
   

async fetch(){

  let x = await fetch('https://jsonplaceholder.typicode.com/todos/2')
let data = await x.json();
this.Apidata=data
}


    

ngOnInit(){
  // this.fetch();
  // this.observalble();
}
  

 


  

}


