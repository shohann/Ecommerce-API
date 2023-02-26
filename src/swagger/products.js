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

const getProduct = {
    tags: ['Products'],
    description: 'Get a product ',
    operationId: 'getProduct',

    responses: {
      '200': {
        description: 'Get a product successfully!',
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
}

const updateProduct = {
  tags: ['Products'],
  description: 'Update a product ',
  operationId: 'getProduct',

  responses: {
    '200': {
      description: 'Get a product successfully!',
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

const removeProduct = {
  tags: ['Products'],
  description: 'Get a product ',
  operationId: 'getProduct',
  security: security,
  responses: {
    '200': {
      description: 'Get a product successfully!',
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
}

const getProductsWithPagination = {
  tags: ['Products'],
  description: 'Get a product ',
  operationId: 'getProductsWithPagination',

  parameters: [
    {
      name: 'category',
      in: 'query',
      description: 'Category Name',
      required: true,
      type: 'string',
    },

    {
      name: 'page',
      in: 'query',
      description: 'Page number',
      required: true,
      type: 'string',
    },

    {
      name: 'size',
      in: 'query',
      description: 'Size',
      required: true,
      type: 'string',
    },
  ],

  responses: {
    '200': {
      description: 'Get paginated products successfully!',
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
                example: [
                    {
                      id: "f6688f47-01b7-41cb-b066-a9f9a7297927",
                      name: "I-Phone 13",
                      stock: 10,
                      price: 100,
                      desc: 'This is product is .....',
                      image: 'https://res.cloudinary.com/ddeluyhm2/image/upload/v1677320814/tezpnqzzlphyal4me0ja.jpg',
                      cloudId: 'tezpnqzzlphyal4me0ja'
                  },
                  {
                    id: "f6688f47-01b7-41cb-b066-a9f9a7297929",
                    name: "I-Phone 12",
                    stock: 10,
                    price: 150,
                    desc: 'This is product is .....',
                    image: 'https://res.cloudinary.com/ddeluyhm2/image/upload/v1677320814/tezpnqzzlphyal4me0ja.jpg',
                    cloudId: 'tezpnqzzlphyal4me0ja'
                  }
                ]
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

const searchProducts = {
  tags: ['Products'],
  description: 'Search for products ',
  operationId: 'searchProducts',

  parameters: [
    {
      name: 'arg',
      in: 'query',
      description: 'argument',
      required: true,
      type: 'string',
    }
  ],

  responses: {
    '200': {
      description: 'Get search result for products successfully!',
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
                example: [
                    {
                      id: "f6688f47-01b7-41cb-b066-a9f9a7297927",
                      name: "I-Phone 13",
                      stock: 10,
                      price: 100,
                      desc: 'This is product is .....',
                      image: 'https://res.cloudinary.com/ddeluyhm2/image/upload/v1677320814/tezpnqzzlphyal4me0ja.jpg',
                      cloudId: 'tezpnqzzlphyal4me0ja'
                  },
                  {
                    id: "f6688f47-01b7-41cb-b066-a9f9a7297929",
                    name: "I-Phone 12",
                    stock: 10,
                    price: 150,
                    desc: 'This is product is .....',
                    image: 'https://res.cloudinary.com/ddeluyhm2/image/upload/v1677320814/tezpnqzzlphyal4me0ja.jpg',
                    cloudId: 'tezpnqzzlphyal4me0ja'
                  }
                ]
              }

            },
          },
        },
      },
    },
    '500': internalServerError,
  },
}

module.exports = {
    setProduct,
    productBody,
    getProduct,
    getProductsWithPagination,
    searchProducts,
    updateProduct, // incomplete
    removeProduct // incomplete
}