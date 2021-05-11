const { Router } = require('express');
const router = Router();


const getProductsRouter = require("./products");
const categoryRouter = require("./category");
// const userRouter= require("./Product/userRouter");
// const ordersRouter= require("./Product/ordersRouter");



router.use("/products", getProductsRouter);
router.use("/category", categoryRouter);
// router.use("/users", userRouter);
// // router.use("/orders", ordersRouter);



module.exports = router;
