import { Component } from '@angular/core';
import { MultiplyPipe } from '../../multiply.pipe';
import { Observable } from 'rxjs';
import { resolve } from 'path';
import { error } from 'console';
import { rejects } from 'assert';
@Component({
  selector: 'app-adminc',
  templateUrl: './adminc.component.html',
  styleUrl: './adminc.component.css'
})

export class AdmincComponent {
getdata() {
console.log(this.title);
}
title=100


//  obs=new Observable(sub=>{
// sub.next(1);
// sub.next(2);
// sub.next(4);
// sub.complete();
// console.log("sub",Observable)

// }).subscribe(val=>{
//   console.log(val)
//   console.log("val")
  
// })

// arr=[2,3,4,4]
// p1=new Promise((reject,resolve)=>{
//   resolve(
//     console.log(this.arr)
    
//   )

// }).then((val)=>{
//   console.log(val)
// }).catch((error)=>{
//   console.log("error fix")
// })

// ngOnInit(){
// console.log(this.p1)
// }



obs = new Observable((ob)=>{
  ob.next(1);
  ob.next(2);
  ob.next(3);
  ob.unsubscribe();
  ob.next(4);
  ob.complete();

}).subscribe((obs)=>{
  console.log(obs)
})


val=[12,2,3,3,4]
p1 = new Promise((resolve,reject)=>{
// resolve(this.val);
// console.log(resolve)
reject(21)

}).then((val)=>{
console.log(val)
}).catch((error)=>{
  console.log("rreject item")
})

ngOnInit(){
  console.log(this.p1)
}

}




