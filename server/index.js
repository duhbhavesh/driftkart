require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');
const { PopulateProducts } = require('./models/product.model');
const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/user.router');
const productsRouter = require('./routes/products.router');
const wishlistRouter = require('./routes/wishlist.router');
const cartRouter = require('./routes/cart.router');

const { handleAuthVerify } = require('./middlewares/handleAuthVerify.middleware');
const { handleError } = require('./middlewares/handleError.middleware');
const { handleRouteNotFound } = require('./middlewares/handleRouteNotFound.middleware');

const app = express();

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateProducts();

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftkart - API' });
});

app.use('/api', productsRouter);
app.use('/api', authRouter);

app.use(handleAuthVerify);
app.use('/api', usersRouter);
app.use('/api', cartRouter);
app.use('/api', wishlistRouter);

app.use(handleRouteNotFound);
app.use(handleError);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`Server Listening on PORT ${PORT}`);
});
