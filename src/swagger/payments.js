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
              example: 'Category not found',
            },
          },
        },
      },
    },
};

const paymentFailed = {
    description: 'Payment Failed',
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
              example: 'Payment Failed',
            },
          },
        },
      },
    },
}

const paymentBody = {
    type: 'object',
    properties: {
      number: {
        type: 'string',
        example: '4242424242424242',
      },
      exp_month: {
        type: 'number',
        example: 8
      },
      exp_year: {
        type: 'number',
        example: 2023
      },
      cvc: {
        type: 'string',
        example: '314'
      },
      currency: {
        type: 'string',
        example: 'Dhaka'
      }
    },
}


const security = [
    {
      bearerAuth: [],
    },
];


const setPayment = {
    tags: ['Payments'],
    description: 'Make a payment for an order',
    operationId: 'setPayment',
    security: security,
    parameters: [
        {
          name: 'orderId',
          in: 'path',
          description: 'Order ID',
          required: true,
          type: 'string',
        },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/paymentBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '201': {
          description: 'Make a payment for an order',
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
                    type: 'string',
                    example: 'Payment successfull'
                  }
    
                },
              },
            },
          },
        },
        // '409': categoryDuplicateEntry,
        // '400': invalidCategoryData,
        '500': paymentFailed,
        '500': internalServerError,
      },
}

module.exports = {
    paymentBody,
    setPayment
}