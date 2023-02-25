const { createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } = require('./users');
const { createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole } = require('./roles')

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
      name: 'Roles',
    },
  ],
  paths: {
    users: {
      post: createUser,
      get: getUsers,
    },
    'users/{id}': {
      delete: deleteUser,
      get: getUser,
      patch: updateUser,
    },
    roles: {
      post: createRole,
      get: getRoles,
    },
    'roles/{id}': {
      delete: deleteRole,
      get: getRole,
      put: updateRole,
    },
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
      createUserBody,
      updateUserBody,
      createOrUpdateRoleBody,
    },
  },
};

module.exports = { apiDocumentation };