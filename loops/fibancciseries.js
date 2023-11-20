let n1=0;
let n2=1;
let n3=0;
let count=20;
console.log(n1,n2);
for(let x=1;x<=count;x++){
    n3=n1+n2;
    console.log(n3)
    n1=n2;
    n2=n3;
}