let fs=require("fs")
fs.readFile("./modules/builtin_modules/fs_modules/fs1.js","utf8",function(err,data){
   if(err){console.log(err)}
   else{console.log(data)}
})


