module.exports = {
    // express
    port: 3001,
    
    // bcrypt
    saltRounds: 10,

    // JWT
    accessTokenTtl: "3h",
    refreshTokenTtl: "10h",
    verificationTokenTtl: "5m",
    passwordResetTokenTtl: "5m",


    // Redis
    redisPort:6379,
    redisHost: '127.0.0.1',
    redisUrl: 'rediss://red-ccjfg1hgp3jn57uv7630:FQ9XxFHuCe4aNIW4qJxBMLXJMJIVqJKv@frankfurt-redis.render.com:6379',
    verifyEmailEX : 300,
    refreshTokenCacheEX: 1000,
    cartCacheEx: 2000,

    // Nodemailer
    emailSender: 'cse.170201013@gmail.com',
    smtpHost: 'smtp.gmail.com',
    smtpPort: 465,
    nodemailerAuthType: 'OAuth2',

    // Multer
    fileMaxSize: 2 * 1024 * 1024,

    // Rate Limiter
    window: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
    maxRequest: 500, // Limit each IP to 100 requests per `window`
    rateLimitMessage: 'You have exceeded the 500 requests in 24 hrs limit!',
    
    //Track Status
    orderTrackStatus: {
        preparing: 'PREPARING',
        shipped: 'SHIPPED',
        deliverd: 'DELIVERD'
    }
};
