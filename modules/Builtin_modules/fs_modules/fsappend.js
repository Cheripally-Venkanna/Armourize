let fs=require("fs")
fs.appendFile("index.txt","gd morning",function(err){
    if (err){
console.log(err)
    }
    else{
        console.log("done")
    }
})