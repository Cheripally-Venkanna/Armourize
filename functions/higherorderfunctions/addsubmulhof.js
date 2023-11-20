function ans(fun,a,b){
let result=fun(a,b);
return result;
}
let add=function (a,b){
    let value=a+b;
    return value;
} 
let sub=function (a,b){
    let value=a-b;
    return value;
}
let mul=function (a,b){
    let value=a*b;
    return value;
}
let result=ans(add,24,13);
console.log(result);
let result1=ans(sub,98,87);
console.log(result1);
let result2=ans(mul,73,67);
console.log(result2);
