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


const categoryDuplicateEntry = {
    description: 'Category already exists',
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
              example: 'Category already exists',
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

const invalidCategoryData = {
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

const categoryBody = {
    type: 'object',
    properties: {
      categoryName: {
        type: 'string',
        example: 'Televisions',
      },
    },
}

const security = [
    {
      bearerAuth: [],
    },
];


const setCategory = {
    tags: ['Categories'],
    description: 'Creates a product category',
    operationId: 'setCategory',
    security: security,
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/categoryBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '201': {
          description: 'Creates a product category successfully!',
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
                        categoryName: "Televisions"
                    }
                  }
    
                },
              },
            },
          },
        },
        '409': categoryDuplicateEntry,
        '400': invalidCategoryData,
        '500': internalServerError,
      },
};


const getCategories = {
    tags: ['Categories'],
    description: 'Get a list of Product category',
    operationId: 'getCategories',

    responses: {
        '200': {
          description: 'Get a list of Product category',
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
                    type: 'array',
                    example: [
                        {
                            id: "65aa86c5-2336-49b6-8c27-e656be20696c",
                            categoryName: "Mobile"
                        },
                        {
                            id: "f6688f47-01b7-41cb-b066-a9f9a7297927",
                            categoryName: "Laptop"
                        },
                    ]
                  }
    
                },
              },
            },
          },
        },
        '500': internalServerError,
      },
};


const modifyCategory = {
    tags: ['Categories'],
    description: 'Update a product category',
    operationId: 'modifyCategory',
    security: security,
    parameters: [
        {
          name: 'categoryId',
          in: 'path',
          description: 'Category ID',
          required: true,
          type: 'string',
        },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/categoryBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '200': {
          description: 'Update a product category successfully!',
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
                        categoryName: "Televison"
                    }
                  }
    
                },
              },
            },
          },
        },
        '404': categoryNotFound,
        '400': invalidCategoryData,
        '500': internalServerError,
      },
}


module.exports = {
    setCategory,
    categoryBody,
    getCategories,
    modifyCategory
}