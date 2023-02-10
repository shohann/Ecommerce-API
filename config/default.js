module.exports = {
    port: 3001,
    
    saltRounds: 10,

    accessTokenTtl: "3h",

    redisPort:6379,
    redisHost: '127.0.0.1',

    emailSender: 'cse.170201013@gmail.com',
    smtpHost: 'smtp.gmail.com',
    smtpPort: 465,
    nodemailerAuthType: 'OAuth2'

};
