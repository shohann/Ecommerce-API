const { createClient } = require('redis');
const { getRedisHost, 
        getRedisPort, 
        getRedisUrl 
      } = require('../utils/appConfigs');

const host = getRedisHost();
const port = getRedisPort();
const url = getRedisUrl();

// const options = { host: host, port: port }; // for local server
const options = { url: url };
const cacheClient = createClient(options);

module.exports.cacheClient = cacheClient;