let _=require('nodemailer')
let fun=_.createTransport({
  service : "gmail",
  auth : {
        user:"venkanna.cheripally@gmail.com",
        pass:"jdvm eimf wzmf ixwt"
    } 
})
let mail = {
    from : "venkanna.cheripally@gmail.com",
    to : "maheshpedagani970@gmail.com",
    subject : "adderss",
    text : "armorize"
}
fun.sendMail(mail,function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("done")
    }
})