function s(fun,x,y){
    let ans=fun(x,y);
    return ans;
}
let l=function(x,y){
    let a=x*2;
    let b=y*2;
    result=(a,b);
    return result;
}
let m=function(x,y){
let result=(x/y);
return result;
}
let n=function(x,y){
    let result=Math.pow(x,y);
    return result;
}
let ans1=s(l,2,3);
console.log(ans1);
let ans2=s(m,4,2);
console.log(ans2);
let ans3=s(n,4,3);
console.log(ans3);