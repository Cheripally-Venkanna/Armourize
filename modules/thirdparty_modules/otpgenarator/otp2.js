let otp=require("otp-generator")
let otpsend=otp.generate(8,{digits:true,alphabets:false,lowerCaseAlphabets:false,upperCaseAlphabets:false})
console.log(otpsend)

 
 
