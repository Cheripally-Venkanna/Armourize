let x=(a,b,c,d,)=>{
    letp=a%2==0?p="even":p="odd";
    letq=b%2==0?q="even":q="odd";
    letr=c%2==0?r="even":r="odd";
    lets=d%2==0?s="even":s="odd";
    return [p,q,r,s];
}
console.log(x(12,23,34,45));