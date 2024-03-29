import { Component } from '@angular/core';
import { Input ,Output,EventEmitter,} from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // @Input() obj: any;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  

  objchild={
    name:'software',
    number:1234
  }
// obj: any;

ngOninit(){
  // this.parentcom.emit("pankaj");

}
}


