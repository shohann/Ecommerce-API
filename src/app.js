const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const app = express();
const { getPort, 
        getWindow, 
        getMaxRequest,
        getRateLimitMessage
       } = require('./api/v1/utils/appConfigs');
const port = getPort();
const windowMs = getWindow();
const max = getMaxRequest();
const message = getRateLimitMessage();

const { apiDocumentation } = require('./swagger/apiDocs')
const { cacheClient } = require('./api/v1/cache/cacheDBInit');
const { 
        handleUnknownRoute, 
        handleError 
      } = require('./api/v1/middlewares/handleError');

const userRouter = require('./api/v1/routes/userRoute');
const profileRouter = require('./api/v1/routes/profileRoute');
const categoryRouter = require('./api/v1/routes/categoryRoute');
const productRouter = require('./api/v1/routes/productRoute');
const cartRouter = require('./api/v1/routes/cartRoute');
const orderRouter = require('./api/v1/routes/orderRoute');
const paymentRouter = require('./api/v1/routes/paymentRoute');
const reviewRouter = require('./api/v1/routes/reviewRoute');
const trackRouter = require('./api/v1/routes/trackRoute');

app.use(rateLimiter({ windowMs, max, message }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/profiles', profileRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/payments', paymentRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/tracks', trackRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

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