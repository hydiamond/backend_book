const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport(
//     'smtps://confesstionceo%40gmail.com:missing123@smtp.gmail.com'
// )
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'huy9701@gmail.com', // generated ethereal user
      pass: 'Aanhhuy3105'// generated ethereal password
    }
  });
exports.sendEmail = async (email, token) => {
    let mailOptions = {
        from: '"SHOOPER 👻" <huy9701@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Account Verification Token', // Subject line
        text: 'Hello my friend',
        html: '<b>verify your account</b>'
            + ' <br/>'
            + '<span>Please verify your account by clicking the link</span>'
            + '<br/>'
            + '<span>http://localhost:3000/confirm/' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.sendEmailForgotPassword = async (email, token) => {
    let mailOptions = {
        from: '"SHOOPER 👻" <huy9701@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Forgot password Verification Token', // Subject line
        html: '<b>Forgot password</b>'
            + ' <br/>'
            + '<span>Please enter OTP below</span>'
            + '<br/>'
            + '<span>' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}
exports.sendMailConfirmPayment = async (email, token) => {
    let mailOptions = {
        from: '"SHOOPER 👻" <huy9701@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Payment Verification Token', // Subject line
        text: 'Hello my friend',
        html: '<b>verify your account</b>'
            + ' <br/>'
            + '<span>Please verify your account by clicking the link</span>'
            + '<br/>'
            + '<span>http://localhost:3000/payment/' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}