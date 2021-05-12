const server = require('express').Router();
const { Order, Product, User } = require("../db");

//Agregar producto a carrito
server.post('/:id',(req,res,next)=>{
    const {id} = req.params
    const {price,quantity,productId} = req.body
    if(!productId) return res.error()
    if(!id) return res.error()
    Product.findOne({
        where:{
            id:parseInt(productId)
        }
    }).then(res=>{
        if(!res.stock){
            return res.status(400).send('No hay stock para ese producto')
        }
        order.create({
            price: price,
            quantity: quantity,
            userId:parseInt(id)
        })
        .then(res=>res.send(res))
        .catch(error=>res.error())  
    }).catch(error=>res.error())    
})

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
//Eliminar un producto
server.delete('/:id',(req,res,next)=>{
    const {id} = req.params
    if(!id) return res.error()
    order.update({
        state:'cancelada',
        where:{
            userId:parseInt(id),
            state:'carrito'
        }
    })
    .then(res=>res.send(res))
    .catch(error=>res.send(error))
})

//Vaciar el carrito
