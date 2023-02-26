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


const categoryNotFound = {
    description: 'Category not found',
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
              example: 'Product not found',
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


const productBody = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'I-Phone 14',
      },
      category: {
        type: 'string',
        example: 'Mobile',
      },
      stock: {
        type: 'string',
        example: '10',
      },
      price: {
        type: 'string',
        example: '100',
      },
      desc: {
        type: 'string',
        example: 'This is product is .....'
      },
      file: {
        type: 'string',
        format: 'binary'
      }
      
    },
}

const security = [
    {
      bearerAuth: [],
    },
];

const setProduct = {
    tags: ['Products'],
    description: 'Creates a product',
    operationId: 'setProduct',
    security: security,
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/components/schemas/productBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '201': {
          description: 'Creates a product successfully!',
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
                        id: "f6688f47-01b7-41cb-b066-a9f9a7297927",
                        name: "I-Phone 13",
                        stock: 10,
                        price: 100,
                        desc: 'This is product is .....',
                        image: 'https://res.cloudinary.com/ddeluyhm2/image/upload/v1677320814/tezpnqzzlphyal4me0ja.jpg',
                        cloudId: 'tezpnqzzlphyal4me0ja'
                    }
                  }
    
                },
              },
            },
          },
        },
        '400': invalidProductData,
        '500': internalServerError,
      },
};

const getProducts = {
    tags: ['Products'],
    description: 'Fetch product by category',
    operationId: 'getProduct',


}

module.exports = {
    setProduct,
    productBody
}