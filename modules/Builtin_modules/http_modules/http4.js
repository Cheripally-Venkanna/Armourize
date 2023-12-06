let che=require("http")
let server=che.createServer((request,response)=>{
    response.write("hi sai"),
    response.end()
})
server.listen(9009)