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
    subject:"greeting",
    text:"all the best" 
}
sender.sendMail(mail,function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("done")
    }
})