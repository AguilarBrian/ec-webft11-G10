const server = require('express').Router();
const { Order, Product, User } = require("../db");

//Devuelve productos segun userId------
server.get('/:id',(req,res,next)=>{
    const {id} = req.params
    if(!id) return res.error()
    order.findAll({
        include:{
            model:product
        },
        where: {
            userId:parseInt(id)
        }
    })
    .then(res=>res.send(res))
    .catch(error=>res.send(error))
})