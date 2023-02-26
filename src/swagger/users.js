

const userResponseWithRole = {
    _id: {
      type: 'string',
      example: '60564fcb544047cdc3844818',
    },
    fullName: {
      type: 'string',
      example: 'John Snow',
    },
    email: {
      type: 'string',
      example: 'john.snow@email.com',
    },
    password: {
      type: 'string',
      example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
    },
    enabled: {
      type: 'boolean',
      example: true,
    },
    role: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '605636683f6e29c81c8b2db0',
        },
        name: {
          type: 'string',
          example: "Role's name",
        },
        description: {
          type: 'string',
          example: "Role's description",
        },
        createdAt: {
          type: 'string',
          example: '2021-03-19T09:51:01.506Z',
        },
        updatedAt: {
          type: 'string',
          example: '2021-03-19T11:48:25.980Z',
        },
      },
    },
    createdAt: {
      type: 'string',
      example: '2021-03-20T19:40:59.495Z',
    },
    updatedAt: {
      type: 'string',
      example: '2021-03-20T21:23:10.879Z',
    },
  };
  
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
  
  const userNotFound = {
    description: 'Resource not found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'User with id: "71675fcb655047cdc4955929" not found',
            },
          },
        },
      },
    },
  };
  
  const invalidUserData = {
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
  
  const createUserBody = {
    type: 'object',
    properties: {
      fullName: {
        type: 'string',
        example: 'John Snow',
      },
      email: {
        type: 'string',
        example: 'john.snow@email.com',
      },
      password: {
        type: 'string',
        description: "unencrypted user's password",
        example: '!1234aWe1Ro3$#',
      },
      enabled: {
        type: 'boolean',
        example: true,
      },
      role: {
        type: 'string',
        example: '605636683f6e29c81c8b2db0',
      },
    },
  };
  
  const updateUserBody = {
    type: 'object',
    properties: {
      fullName: {
        type: 'string',
        example: 'John Snow',
      },
      role: {
        type: 'string',
        example: '605636683f6e29c81c8b2db0',
      },
    },
  };

  
  const createUser = {
    tags: ['Users'],
    description: 'Create a new user in the system',
    operationId: 'createUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createUserBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'User created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
                fullName: {
                  type: 'string',
                  example: 'John Snow',
                },
                email: {
                  type: 'string',
                  example: 'john.snow@email.com',
                },
                password: {
                  type: 'string',
                  example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
                },
                enabled: {
                  type: 'boolean',
                  example: true,
                },
                role: {
                  type: 'string',
                  example: '605636683f6e29c81c8b2db0',
                },
                createdAt: {
                  type: 'string',
                  example: '2021-03-20T19:40:59.495Z',
                },
                updatedAt: {
                  type: 'string',
                  example: '2021-03-20T21:23:10.879Z',
                },
              },
            },
          },
        },
      },
      '422': invalidUserData,
      '500': internalServerError,
    },
  };
  
  const getUsers = {
    tags: ['Users'],
    description: 'Retrieve all the users',
    operationId: 'getUsers',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      '200': {
        description: 'Users retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: userResponseWithRole,
              },
            },
          },
        },
      },
      '500': internalServerError,
    },
  };
  
  const getUser = {
    tags: ['Users'],
    description: 'Retrieve one user',
    operationId: 'getUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'User retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: userResponseWithRole,
            },
          },
        },
      },
      '404': userNotFound,
      '500': internalServerError,
    },
  };
  
  const updateUser = {
    tags: ['Users'],
    description: 'Update a user',
    operationId: 'updateUser',
    security,
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/updateUserBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '200': {
        description: 'User retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: userResponseWithRole,
            },
          },
        },
      },
      '404': userNotFound,
      '422': invalidUserData,
      '500': internalServerError,
    },
  };
  
  const deleteUser = {
    tags: ['Users'],
    description: 'Delete a user',
    operationId: 'deleteUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'User deleted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'User deleted successfully!',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };


/////////////////////////////

const signUpBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'John Snow',
    },
    email: {
      type: 'string',
      example: 'john@gmail.com'
    },
    password: {
      type: 'string',
      example: '1234567'
    }
  },
};

const logInBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john@gmail.com'
    },
    password: {
      type: 'string',
      example: '1234567'
    }
  },
}

const resendBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john@gmail.com'
    },
  },
};

const forgetBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john@gmail.com'
    },
  },
}

const changeBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john@gmail.com'
    },
    password: {
      type: 'string',
      example: '1234567'
    },
  },
}

const duplicateUser = {
  description: 'Duplicate user provided',
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
            example: 'User already has an account',
          },
        },
      },
    },
  },
};

const invalidEmailPassword = {
  description: 'Invalid  user email or password',
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
            example: 'Invalid email or password',
          },
        },
      },
    },
  },
}

const invalidEmail = {
  description: 'Invalid  user email ',
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
            example: 'There is no user with this email',
          },
        },
      },
    },
  },
}

const invalidVerificationToken = {
  description: 'Invalid Verification Token',
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
            example: 'Invalid Verification Token',
          },
        },
      },
    },
  },
}

const invalidRefreshToken = {
  description: 'Invalid refresh token provided',
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
            example: 'Invalid Refresh Token',
          },
        },
      },
    },
  },
}

const invalidRequest = {
  description: 'Invalid resend request',
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
            example: 'Invalid request',
          },
        },
      },
    },
  },
}


const signUp = {
  tags: ['Users'],
  description: 'Sent a verification email',
  operationId: 'signUp',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/signUpBody',
        },
      },
    },
    required: true,
  },

  responses: {
    '201': {
      description: 'Verification link has been sent successfully!',
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
                example: 'Verification link has been sent to john@gmail.com'
              }

            },
          },
        },
      },
    },
    '409': duplicateUser,
    '400': invalidUserData,
    '500': internalServerError,
  },
};

const verify = {
  tags: ['Users'],
  description: ' Verify email by giving access token and refresh token',
  operationId: 'verify',

  parameters: [
    {
      name: 'token',
      in: 'path',
      description: 'Varification Token',
      required: true,
      type: 'string',
    },
  ],

  responses: {
    '200': {
      description: 'Email verified successfully!',
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
                properties: {
                  accessToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MDQwOTJ9.UsQh13SItR145tKwurjJO3GADkc7G1q4Sfia1Z8IsF4'
                  },

                  refreshToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MjkyOTJ9.qntKVDCSAIG5g2Ojff87XGoAmJtEAZ8hpEN1yMZVquk'
                  }
                }
              }
  

            },
          },
        },
      },
    },
    '400': invalidVerificationToken,
    '500': internalServerError,
  },
};


const resend = {
  tags: ['Users'],
  description: 'Sent a verification email',
  operationId: 'resend',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/resendBody',
        },
      },
    },
    required: true,
  },

  responses: {
    '201': {
      description: 'Verification link has been resent successfully!',
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
                example: 'Verification link has been sent to john@gmail.com'
              }

            },
          },
        },
      },
    },
    '400': invalidRequest,
    '500': internalServerError,
  },
};


const logIn = {
  tags: ['Users'],
  description: 'Login a user using email and password',
  operationId: 'login',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/logInBody',
        },
      },
    },
    required: true,
  },

  responses: {
    '200': {
      description: 'Successfull login',
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
                properties: {
                  accessToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MDQwOTJ9.UsQh13SItR145tKwurjJO3GADkc7G1q4Sfia1Z8IsF4'
                  },

                  refreshToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MjkyOTJ9.qntKVDCSAIG5g2Ojff87XGoAmJtEAZ8hpEN1yMZVquk'
                  }
                }
              }

            },
          },
        },
      },
    },
    '401': invalidEmailPassword,
    '500': internalServerError,
  },
}

const refresh = {
  tags: ['Users'],
  description: 'Login a user using email and password',
  operationId: 'refresh',
  security: security,

  responses: {
    '200': {
      description: 'Successfull refresh',
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
                properties: {
                  accessToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MDQwOTJ9.UsQh13SItR145tKwurjJO3GADkc7G1q4Sfia1Z8IsF4'
                  },

                  refreshToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MjkyOTJ9.qntKVDCSAIG5g2Ojff87XGoAmJtEAZ8hpEN1yMZVquk'
                  }
                }
              }

            },
          },
        },
      },
    },
    '401': invalidRefreshToken,
    '500': internalServerError,
  },
}



const logOut = {
  tags: ['Users'],
  description: 'Logout a user',
  operationId: 'logout',
  security: security,

  responses: {
    '200': {
      description: 'Logout a user using valid refresh token',
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
                example: 'Logout finished for the email john@gmail.com'
              }

            },
          },
        },
      },
    },
    '401': invalidRefreshToken,
    '500': internalServerError,
  },
}

const forget = {
  tags: ['Users'],
  description: 'forget password request',
  operationId: 'forget',

  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/forgetBody',
        },
      },
    },
    required: true,
  },

  responses: {
    '200': {
      description: 'Forget password verification email sent',
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
                example: 'Forget password verification email  sent to john@gmail.com'
              }

            },
          },
        },
      },
    },
    '401': invalidEmail,
    '500': internalServerError,
  },


}

const change = {
  tags: ['Users'],
  description: 'Change password request',
  operationId: 'change',

  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/changeBody',
        },
      },
    },
    required: true,
  },

  responses: {
    '200': {
      description: 'Change password verification email sent',
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
                example: 'Change password verification email  sent to john@gmail.com'
              }

            },
          },
        },
      },
    },
    '401': invalidEmailPassword,
    '500': internalServerError,
  },

};

const reset = {
  tags: ['Users'],
  description: ' Verify user and reset its password',
  operationId: 'reset',

  parameters: [
    {
      name: 'userId',
      in: 'path',
      description: 'User Id',
      required: true,
      type: 'string',
    },
    {
      name: 'token',
      in: 'path',
      description: 'Varification Token',
      required: true,
      type: 'string',
    },
  ],


  responses: {
    '200': {
      description: 'Finish password verification and reset the password',
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
                properties: {
                  accessToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MDQwOTJ9.UsQh13SItR145tKwurjJO3GADkc7G1q4Sfia1Z8IsF4'
                  },

                  refreshToken: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob2hhbnVycjQ5MEBnbWFpbC5jb20iLCJpZCI6IjA4NjY5YzkxLTRiODctNDljOC04YjgxLTRkZmNhMDRlMjA1YiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3MzkzMjkyLCJleHAiOjE2Nzc0MjkyOTJ9.qntKVDCSAIG5g2Ojff87XGoAmJtEAZ8hpEN1yMZVquk'
                  }
                }
              }

            },
          },
        },
      },
    },
    '401': invalidVerificationToken,
    '500': internalServerError,
  },

}



module.exports = { createUser, createUserBody, 
                   deleteUser, getUsers, getUser, 
                   updateUserBody, updateUser,

                   signUp, signUpBody, verify, 
                   resend, resendBody, logIn, logInBody, refresh, logOut,
                   change, changeBody, forget, forgetBody, reset
                    
                   };