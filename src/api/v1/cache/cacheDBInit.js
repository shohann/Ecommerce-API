const { createClient } = require('redis');
const { getRedisHost, getRedisPort } = require('../utils/appConfigs');

const host = getRedisHost();
const port = getRedisPort();
const options = { host: host, port: port };
const cacheClient = createClient(options);

module.exports.cacheClient = cacheClient;