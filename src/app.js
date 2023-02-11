const express = require('express');
const app = express();
const port = require('./api/v1/utils/appConfigs').getPort();
const { cacheClient } = require('./api/v1/cache/cacheDBInit')
const { handleUnknownRoute, handleError } = require('./api/v1/middlewares/handleError');
const userRouter = require('./api/v1/routes/userRoute');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter)

app.all('*', handleUnknownRoute);
app.use(handleError);

app.listen(port, async () => {
    try {
        await cacheClient.connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log(error);
    }
});