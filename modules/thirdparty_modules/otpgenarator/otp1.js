let _=require("otp-generator")
let otp=_.generate(4, { digits: true, alphabets: false, upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false })
console.log(otp)



let nodemail=require("nodemailer")
let sender=nodemail.createTransport({
    service:"gmail",
    auth:{
        user:"venkanna.cheripally@gmail.com",
        pass:"ottq vmfz nnjr rlww"
    }
})
let mail={
    from:"venkanna.cheripally@gmail.com",
    to:"amruthraj1952@gmail.com",
    subject:"OTP",
    text:otp 
}
sender.sendMail(mail,function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("done")
    }
})