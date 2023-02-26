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

const profileNotFound = {
    description: 'Profile not found',
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
              example: 'Profile not found',
            },
          },
        },
      },
    },
};

const profileDuplicateEntry = {
    description: 'Profile already exists',
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
              example: 'Profile already exists',
            },
          },
        },
      },
    },
};

const invalidProfileData = {
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


const profileBody = {
    type: 'object',
    properties: {
      phone: {
        type: 'string',
        example: '013393829292444',
      },
      address: {
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

const setProfile = {
    tags: ['Profiles'],
    description: 'Creates a user profile',
    operationId: 'setProfile',
    security: security,
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/profileBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '201': {
          description: 'Creates a user profile successfully!',
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
                    example: 'Profile has been created'
                  }
    
                },
              },
            },
          },
        },
        '409': profileDuplicateEntry,
        '400': invalidProfileData,
        '500': internalServerError,
      },
};

const getProfile = {
    tags: ['Profiles'],
    description: 'Get a user profile with userId',
    operationId: 'getProfile',
    security: security,

    responses: {
        '201': {
          description: 'Get a user profile with userId',
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
                        profile: {
                            phone: '013393829292444',
                            address: 'Dhaka'
                        }
                    }
                  }
    
                },
              },
            },
          },
        },
        '404': profileNotFound,
        '500': internalServerError,
    },
}

const modifyProfile = {
    tags: ['Profiles'],
    description: 'Update a user profile',
    operationId: 'modifyProfile',
    security: security,
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/profileBody',
          },
        },
      },
      required: true,
    },

    responses: {
        '200': {
          description: 'Updates a user profile successfully!',
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
                    example: {
                        type: 'object',
                        example: {
                            profile: {
                                phone: '013393829292444',
                                address: 'Dhaka'
                            }
                        }
                    }
                  }
    
                },
              },
            },
          },
        },
        '400': invalidProfileData,
        '500': internalServerError,
      },
}


module.exports = {
    setProfile,
    profileBody,
    getProfile,
    modifyProfile
}