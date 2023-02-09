const redis = require('redis')

// rediss://red-ccjfg1hgp3jn57uv7630:FQ9XxFHuCe4aNIW4qJxBMLXJMJIVqJKv@frankfurt-redis.render.com:6379

const client = redis.createClient({
    url: 'rediss://red-ccjfg1hgp3jn57uv7630:FQ9XxFHuCe4aNIW4qJxBMLXJMJIVqJKv@frankfurt-redis.render.com:6379'
})



const connectRedis = async () => {
  try {
    await client.connect();
    // await client.del('noderedis:jsondata');
    console.log('Redis client connect successfully');
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();


