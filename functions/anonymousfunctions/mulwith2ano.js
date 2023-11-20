let g=function(p,q,r){
    let x=p*2;
    let y=q*2;
    let z=r*2;
    let k=[x,y,z];
 return k;
}

function func(g,p,q,r){
     
   let result= g(p,q,r);
   return result
}
let k1=func(g,3,2,9);
console.log(k1);