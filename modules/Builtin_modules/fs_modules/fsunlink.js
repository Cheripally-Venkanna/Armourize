let fs=require("fs")
fs.unlink("index.txt",function(err){
    if(err){
        console.log(err)
    }
    else 
    {console.log("sucess")
}
})