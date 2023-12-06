let _ =require('lodash')

let y=_.partition([1,12,34,2,5,2,7,5,30,4],x=>x>5);

console.log(y);
let $=require('lodash')

let p=_.partition([1,12,34,2,5,2,7,5,30,4],x=>x%3);
console.log(p);
