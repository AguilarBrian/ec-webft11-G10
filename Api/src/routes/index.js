const { Router } = require('express');

const getProductsRouter = require('./Product/getProductsRouter');
const categoryRouter = require('./Product/categoryRouter');
const router = Router();

router.use('/products', getProductsRouter);
router.use('/categories', categoryRouter);

module.exports = router;
