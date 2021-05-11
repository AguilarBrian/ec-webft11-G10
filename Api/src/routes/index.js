const { Router } = require('express');
const router = Router();


const getProductsRouter = require("./products");
const categoryRouter = require("./category");
const userRouter= require("./user");
const ordersRouter= require("./orders");



router.use("/products", getProductsRouter);
router.use("/category", categoryRouter);
router.use("/users", userRouter);
router.use("/orders", ordersRouter);


//router.use('/cart', require('./cart.js'));

module.exports = router;