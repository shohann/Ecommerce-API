const express = require('express');
const app = express();
const port = require('./api/v1/utils/appConfigs').getPort();

const { cacheClient } = require('./api/v1/cache/cacheDBInit')
const { handleUnknownRoute, handleError } = require('./api/v1/middlewares/handleError');

const userRouter = require('./api/v1/routes/userRoute');
const profileRouter = require('./api/v1/routes/profileRoute');
const categoryRouter = require('./api/v1/routes/categoryRoute');
const productRouter = require('./api/v1/routes/productRoute');
const cartRouter = require('./api/v1/routes/cartRoute');
const cartItemRouter = require('./api/v1/routes/cartItemRoute');
const orderRouter = require('./api/v1/routes/orderRoute')

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/profiles', profileRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/cart-items', cartItemRouter);
app.use('/api/v1/orders', orderRouter);

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