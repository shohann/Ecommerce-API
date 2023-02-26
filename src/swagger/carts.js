const internalServerError = {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Internal Server Error',
            },
          },
        },
      },
    },
};

const cartNotFound = {
    description: 'Cart not found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Cart not found',
            },
          },
        },
      },
    },
};

const cartItemNotFound = {
    description: 'Cart item not found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Cart item not found',
            },
          },
        },
      },
    },
};

const invalidProductData = {
    description: 'Invalid Data provided',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'The fields field1, field2 and field3 are required',
            },
          },
        },
      },
    },
};

const security = [
    {
      bearerAuth: [],
    },
];

// const cartBody = {

// }

const getCart = {
    tags: ['Carts'],
    description: 'Get the user cart',
    operationId: 'getCart',
    security: security,


    responses: {
        '201': {
          description: 'Creates a user cart successfully!',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
    
                  success: {
                    type: 'boolean',
                    example: true,
                  },
                  message: {
                    type: 'object',
                    example: {
                        total: 800,
                        items: [
                            {
                                productId: "897d2b4e-54c5-4056-8896-74532e6bc53b",
                                price: 200,
                                subTotal: 400,
                                quantity: 1
                            }
                        ]
                    }
                  }
    
                },
              },
            },
          },
        },
        '404': cartNotFound,
        '500': internalServerError,
      },
};


const removeCart = {
    tags: ['Carts'],
    description: 'Remove the user cart',
    operationId: 'removeCart',
    security: security,

    responses: {
        '200': {
          description: 'Removes a user cart successfully!',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
    
                  success: {
                    type: 'boolean',
                    example: true,
                  },
                  message: {
                    type: 'object',
                    example: 'Cart  deleted'
                  }
    
                },
              },
            },
          },
        },
        '404': cartNotFound,
        '500': internalServerError,
      },
};

const setCartItemInc = {
    tags: ['Carts'],
    description: 'Set cart item increment',
    operationId: 'setCartItemInc',
    security: security,

    parameters: [
        {
          name: 'productId',
          in: 'path',
          description: 'Product ID',
          required: true,
          type: 'string',
        },
    ],

    responses: {
        '200': {
          description: 'Set cart item increment successfully!',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
    
                  success: {
                    type: 'boolean',
                    example: true,
                  },
                  message: {
                    type: 'object',
                    example: 'New Item added to cart'
                  }
    
                },
              },
            },
          },
        },
        '500': internalServerError,
      },
};

const removeCartItemDec = {
    tags: ['Carts'],
    description: 'Remove cart item decrement',
    operationId: 'removeCartItemDec',
    security: security,

    parameters: [
        {
          name: 'productId',
          in: 'path',
          description: 'Product ID',
          required: true,
          type: 'string',
        },
    ],

    responses: {
        '200': {
          description: 'Remove cart item decrement successfully!',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
    
                  success: {
                    type: 'boolean',
                    example: true,
                  },
                  message: {
                    type: 'object',
                    example: 'Item decremented'
                  }
    
                },
              },
            },
          },
        },
        '404': cartItemNotFound,
        '500': internalServerError,
      },
};

const removeCartItem = {
    tags: ['Carts'],
    description: 'Remove cart item',
    operationId: 'removeCartItem',
    security: security,

    parameters: [
        {
          name: 'productId',
          in: 'path',
          description: 'Product ID',
          required: true,
          type: 'string',
        },
    ],

    responses: {
        '200': {
          description: 'Remove cart item  successfully!',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
    
                  success: {
                    type: 'boolean',
                    example: true,
                  },
                  message: {
                    type: 'object',
                    example: 'Cart Item deleted'
                  }
    
                },
              },
            },
          },
        },
        '404': cartItemNotFound,
        '500': internalServerError,
      },
};

module.exports = {
    getCart,
    removeCart,
    setCartItemInc,
    removeCartItemDec,
    removeCartItem
}