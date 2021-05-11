const server = require('express').Router();
const cart = require('../controllers/cart');

server.post('/', (req, res, next) => {
    const { productId, quantity } = req.body
    if (!productId || !quantity) {
        return res.error()
    } else {
        return cart.addToCart(req.body)
        .then(r => res.send(r))
        .catch(next)
    }
})