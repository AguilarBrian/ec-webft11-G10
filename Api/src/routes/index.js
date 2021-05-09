const { Router } = require('express');


const getProductsRouter = require("./product/getProductsRouter");
const categoryRouter = require("./category/categoryRouter");
// const userRouter= require("./Product/userRouter");
// const ordersRouter= require("./Product/ordersRouter");


const router = Router();

router.use("/products", getProductsRouter);
router.use("/category", categoryRouter);
// router.use("/users", userRouter);
// // router.use("/orders", ordersRouter);



module.exports = router;
