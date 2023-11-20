let k=function(p,q){
    let a;
    let b;
    p%2==0?a="even":a="odd";
    q%2==0?b="even":b="odd";
    return [a,b];
}
console.log(k(234,345));
