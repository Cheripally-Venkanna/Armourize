function mul(x,y){
    let q=x*y;
    return q;
}
let add=(x,y)=>{
    let p=x+y;
    return p;
}
let sub=function(x,y){
    let r=x-y;
    return r
}
function value(x,y,fun){
    return fun(x,y);
}
let rs1=value(2,3,mul);
console.log(rs1);
let rs2=value(3,4,add);
console.log(rs2);
let rs3=value(5,7,sub);
console.log(rs3)