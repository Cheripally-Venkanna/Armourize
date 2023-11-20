let fs=require("fs")
fs.readFile("./modules/function16.js","utf8",function(err,data){
    if(err){console.log(err)}
    else{
        console.log(data)
    }
})
