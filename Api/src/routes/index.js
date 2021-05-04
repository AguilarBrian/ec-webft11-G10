const { Router } = require("express");

const getProductsRouter = require("./Product/getProducts");
const router = Router();

router.use("/products", getProductsRouter);

module.exports = router;
