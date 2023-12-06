let url=require("url")
let fun="http://localhost:1616/url1.js?name=cherry&state=telangana"
let adderss=url.parse(fun,true)
console.log(adderss.port)
console.log(adderss.host)