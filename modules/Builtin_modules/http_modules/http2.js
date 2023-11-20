let fun=require("http")
let myserver=fun.createServer((request,response)=>{
    response.write("hello mahesh")
    response.end()
})
myserver.listen(1134)