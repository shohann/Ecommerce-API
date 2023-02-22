const nodemailer = require('nodemailer');

const {  getEmailSender, 
         getSmtpHost, 
         getSmtpPort, 
         getNodemailerAuthType, 
         getOauth2ClientId, 
         getOauth2ClientSecret, 
         getOauth2RefreshToken 
      } = require('./appConfigs');

// OAuth2
const { getOauth2ClientAccessToken } = require('./oauth2');
const oauth2ClientId = getOauth2ClientId();
const oauth2ClientSecret = getOauth2ClientSecret();
const oauth2AccessToken = getOauth2ClientAccessToken();
const oauth2RefreshToken = getOauth2RefreshToken();

// Nodemailer
const emailSender = getEmailSender();
const smtpHost = getSmtpHost();
const smtpPort = getSmtpPort();
const nodemailerAuthType= getNodemailerAuthType();

// Connection Data for creating a transporter
const connectionData = {
    host: smtpHost,
    port: smtpPort,
    secure: true,
    auth: {
        type: nodemailerAuthType,
        user: emailSender,
        clientId: oauth2ClientId,
        clientSecret: oauth2ClientSecret,
        refreshToken: oauth2RefreshToken,
        accessToken: oauth2AccessToken,
    },
    tls: {
        rejectUnauthorized: false,
    },
}

module.exports.sendVerificationEmail = async (email, link) => {
    const transporter = await nodemailer.createTransport(connectionData);
    const mailOptions = {
        from: 'Verification <cse.170201013@gmail.com>',
        to: email,
        subject: "Verification Link",
        text: link,
        html: `<h1>${link}</h1>`
    
    };

    await transporter.sendMail(mailOptions);
}