const { signUp, signUpBody, verify, resend, resendBody,
        logIn, logInBody, refresh, logOut, forget, 
        forgetBody, change, changeBody,reset
      } = require('./users');

const { setProfile, profileBody, 
        getProfile, modifyProfile } = require('./profiles');

const { setCategory, categoryBody,
        getCategories, modifyCategory } = require('./categories');

const { setProduct, productBody, getProduct, 
        getProductsWithPagination, searchProducts, 
        updateProduct, removeProduct
      } = require('./products');

const { getCart, removeCart, 
        setCartItemInc, removeCartItemDec,
        removeCartItem } = require('./carts');

const { setOrder } = require('./orders');

const { setPayment, paymentBody } = require('./payments');


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
      name: 'Profiles',
    },
    {
      name: 'Categories',
    },
    {
      name: 'Products'
    },
    {
      name: 'Carts'
    },
    {
      name: 'Orders'
    },
    {
      name: 'Payments'
    }
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
    },
    /////////////////////
    profiles : {
      post: setProfile,
      get: getProfile,
      put: modifyProfile
    },
    ////////
    categories: {
      post: setCategory,
      get: getCategories
    },
    'categories/{categoryId}': {
      put: modifyCategory
    },
    ////////
    'products/': {
      'post': setProduct,
      'get': getProductsWithPagination,
      'update': updateProduct,
      'delete': removeProduct
    },
    'products/all/search': {
      get: searchProducts
    },
    'products/{productId}': {
      get: getProduct
    },

    ///
    'carts/': {
      get: getCart,
      delete: removeCart
    },
    'carts/inc/{productId}': {
      post: setCartItemInc
    },
    'carts/dec/{productId}': {
      delete: removeCartItemDec
    },
    'carts/{productId}': {
      delete: removeCartItem
    },

    //
    'orders/': {
      post: setOrder
    },
    //
    'payments/{productId}': {
      post: setPayment
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
      profileBody,
      categoryBody,
      productBody,
      paymentBody
    },
  },
};

module.exports = { apiDocumentation };