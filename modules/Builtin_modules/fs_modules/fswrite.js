let fs=require("fs")
fs.writeFile("index.txt","hi berry",function(err){
    if(err){console.log(err)}
    else {console.log("done")}
})