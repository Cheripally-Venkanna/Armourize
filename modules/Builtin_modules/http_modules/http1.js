let file=require("http")
let server=file.createServer((request,response)=>{
    response.write("hello cherry best of luck")
    response.end()
})
server.listen(1616)