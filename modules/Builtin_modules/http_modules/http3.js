let che=require("http")
let server=che.createServer((request,response)=>{
    response.write("hi vikram sir")
    response.end()
}
)
server.listen(9009)