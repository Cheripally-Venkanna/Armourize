let y=function ans(p,q,r){
    let a;
    let b;
    let c;
    a=p%2==0?a="even":a="odd";
    b=q%2==0?b="even":b="odd";
    c=p%2==0?c="even":c="odd";
    return [a,b,c];

}(12,13,14);
console.log(y);

