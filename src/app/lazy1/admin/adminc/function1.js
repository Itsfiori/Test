function conso1(){
  for(let i=0;i<3;i++){
    
return function fun(){
    setTimeout(() => {
      console.log(i)

    }, 2000);
  
}
  }

} 
conso1();
