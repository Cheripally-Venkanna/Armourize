var _ =require('lodash')

let res=_.partition([1,2,3,4],x=>x%2);

console.log(res);