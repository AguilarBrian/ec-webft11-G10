const { Router } = require('express');
const router = Router();

const productsRouter = require('./products');
const categoryRouter = require('./category');
// const userRouter = require('./user');
// const ordersRouter = require('./orders');

<<<<<<< HEAD
const getProductsRouter = require("./products");
const categoryRouter = require("./category");
const userRouter= require("./user");
const ordersRouter= require("./orders");



router.use("/products", getProductsRouter);
router.use("/category", categoryRouter);
router.use("/users", userRouter);
router.use("/orders", ordersRouter);


//router.use('/cart', require('./cart.js'));
=======
router.use('/products', productsRouter);
router.use('/category', categoryRouter);
// router.use('/users', userRouter);
// router.use('/orders', ordersRouter);

// router.use('/cart', require('./cart.js'));
>>>>>>> a830f56f64a6eddb56ca8ba1ca9cf5c59df88150

module.exports = router;