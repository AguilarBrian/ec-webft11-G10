const { Cart, Product, Image, Review, User } = require('../db.js');

module.exports = {
    addToCart: function ({ productId, quantity }) {
        const cartPromise = Cart.findOrCreate()
            .then(r => r[0])
        const productPromise = Product.findByPk(productId)
        return Promise.all([cartPromise, productPromise])
            .then(([cart, product]) => {
                cart.addProduct(product, {
                    through: {
                        price: product.price,
                        quantity
                    }
                })
            })
    },

}