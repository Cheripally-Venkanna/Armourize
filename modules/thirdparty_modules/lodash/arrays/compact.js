let _=require("lodash")
let ans=_.compact([1,2,3,0,5,null,false,NaN,""])
console.log(ans)