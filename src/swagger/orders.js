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

const security = [
    {
      bearerAuth: [],
    },
];

const setOrder = {
    tags: ['Orders'],
    description: 'Set a order',
    operationId: 'setOrder',
    security: security,
    responses: {
        '200': {
          description: 'Set order',
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
                    example:'Order has been placed successfully'
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

module.exports = {
    setOrder
}
