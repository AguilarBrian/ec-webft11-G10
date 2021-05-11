const server = require('express').Router();
const cart = require('../controllers/cart');

server.get('/',(req,res,next)=>{
    order.findAll({
        include:{
            model:product
        }
    })
})