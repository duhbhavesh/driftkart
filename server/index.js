require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');
const { PopulateProducts } = require('./models/products');
const productsRouter = require('./routes/products-router');
const wishlistRouter = require('./routes/wishlist-router');
const cartRouter = require('./routes/cart-router');

const { errorHandler } = require('./middlewares/error-handler');
const { routeNotFound } = require('./middlewares/route-not-found');

const app = express();

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateProducts()

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftkart - API' });
});

app.use('/products', productsRouter);
app.use('/wishlist', wishlistRouter);
app.use('/cart', cartRouter);

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server Listening on PORT ${PORT}`);
});
