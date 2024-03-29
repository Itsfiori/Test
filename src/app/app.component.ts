import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'parent_pankaj';
  str:any="pipestring"
  obj={
    name:'pankaj',
    age:22
  }
datacoming:any;
item = ['item1', 'item2', 'item3', 'item4'];
items = [
  { title: 'Item 1', content: 'Content 1' },
  { title: 'Item 2', content: 'Content 2' },
  { title: 'Item 3', content: 'Content 3' }
];



isCollapsed: boolean[] = [];

constructor() {
  this.isCollapsed = this.items.map(() => true);
}

toggleCollapse(index: number): void {
  this.isCollapsed[index] = !this.isCollapsed[index];
}

background='pink'


addItem(newItem: string) {
  // this.items.push(newItem);
}
ngOnInit(){
  
  

}  parentmethod(data:any){
  this.datacoming=data;

    console.log("this is parent component",this.datacoming);
    
  }
  

}
