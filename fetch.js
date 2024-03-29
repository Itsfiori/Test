// const { log } = require("@angular-devkit/build-angular/src/builderssr-dev-server");

console.log(678);
let res = foo()
console.log(res);

 function foo(){

    new Promise ((resolve,reject)=>{

        setTimeout(() => {
            resolve(
                fetch("https://ipinfo.io/161.185.160.93/geo").then((res)=>{
    console.log(res.ok);
    console.log(res.json);
    console.log(res);

    return res;

})
            )
        }, 3000);
    })



}