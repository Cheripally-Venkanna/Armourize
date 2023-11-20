let fs=require("fs")
fs.writeFile("./modules/Builtin_modules/fs_modules/fs1.js","updating through program",(err)=>{
    if(err){console.log("write not sucess")}
  else{console.log("write success")}
})
console.log("write before")