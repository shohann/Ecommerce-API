const { 
        signUp, signUpBody, verify, resend, resendBody,
        logIn, logInBody, refresh, logOut, forget, 
        forgetBody, change, changeBody,reset
      } = require('./users');

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'E-Commerce API - Documentation',
    // description: 'Description of my API here',
    // termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'Shohanur Rahman',
      email: 'shohanurr490@gmail.com',
      // url: 'https://devwebsite.com',
    },
    // license: {
    //   name: 'Apache 2.0',
    //   url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    // },
  },
  servers: [
    {
      url: 'http://localhost:3001/api/v1',
      description: 'Local Server',
    },
    // {
    //   url: 'https://api.mysite.com',
    //   description: 'Production Server',
    // },
  ],
  tags: [
    {
      name: 'Users',
    },
    {
      name: 'Profile',
    },
  ],
  paths: {
    'users/signup': {
      post: signUp
    },
    'users/verify/{token}': {
      get: verify
    },
    'users/resend': {
      post: resend
    },
    'users/login': {
      post: logIn
    },
    'users/refresh': {
      get: refresh
    },
    'users/logout': {
      delete: logOut
    },
    'users/forget': {
      post: forget
    },
    'users/change': {
      post: change
    },
    'users/reset/{userId}/{token}': {
      put: reset
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      signUpBody,
      resendBody,
      logInBody,
      forgetBody,
      changeBody,
      
    },
  },
};

module.exports = { apiDocumentation };