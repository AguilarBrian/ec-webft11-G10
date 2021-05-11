const { Router } = require('express');
const router = Router();


//const getProductsRouter = require("./products");
//const categoryRouter = require("./category");
// const userRouter= require("./Product/userRouter");
// const ordersRouter= require("./Product/ordersRouter");



router.use("/products", require("./products"));
router.use("/category", require("./category"));
// router.use("/users", userRouter);
// // router.use("/orders", ordersRouter);


router.use('/cart', require('./cart.js'));

module.exports = router;
