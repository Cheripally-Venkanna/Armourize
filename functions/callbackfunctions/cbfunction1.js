// console.log(x);
var x=5;
let b=5;

function manu(a,b){
    let x=a*b;
    return x;
}
function cherry(a,b){
    let y=a+b;
    return y;
}
function value(val1,val2,mix){
   return mix(val1,val2);   
}
console.log(value(2,5,manu))



console.log(value(2,5,cherry))
console.log(x+b);