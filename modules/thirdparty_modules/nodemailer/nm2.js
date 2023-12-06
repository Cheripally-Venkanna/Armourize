let nm=require("nodemailer")
let fun1=nm.createTransport({
    service:"gmail",
    auth:{
       user:"venkanna.cheripally@gmail.com",
       pass:"nkfh oygw unlw sqzn"
    }
})
let mail={
    from:"venkanna.cheripally@gmail.com",
    to:"venkatcheripally1616@gmail.com",
    sub:"greeting",
    text:"all the best cherry"
}
fun1.sendMail(mail,function(err,data){
    if (err){
        console.log(err)
    }
    else{
        console.log("done")
    }
})