const server = require('express').Router();
const { Category } = require('../../db.js');

var p = new Promise(resolve => resolve(true))

const categories = ["helado", "hamburguesas", "pizza", "bebidas", "frutas", "cereales", "carnes", "verduras"];


    categories.forEach(category => (
        p = p.then(() => (
            Category.create({
                name: category,
                description: "Platos de " + category
            })
        ))
    ))



// TRAE TODAS LAS CATEGORIAS |
//----------------------------
server.get('/get', (req, res) => {
    Category.findAll()
        .then(category => {
            res.status(200)
            console.log('200 GET_CATEGORIES')
            res.json(category);
        })
        .catch(err => res.send(err));
});

// CREA UNA CATEGORIA |
//---------------------
server.post('/', (req, res) => {
    //crear categoría
    const { name, description } = req.body; 
    if (!name) return res.send('no se puede agregar la categoría porque falta el "name"')
    Category.create({	
        name,
        description
    }).then((category) => {	
        res.send(category)
    })
})

// MODIFICA UNA CATEGORIA |
//-------------------------
server.put('/:id', (req, res) => {
    
    const id = req.params.id; 
    const { name, description } = req.body; 

    Category.findOne({ where: { id } })
        .then((category) => {
            if (!category) res.send('category not found') 
            else {
                category.update({ name, description }) 
                res.send(category) 
            }
        })
        .catch(err => res.send(err)) 
})

// ELIMINA UNA CATEGORIA |
//------------------------
server.delete('/:id', (req, res) => {
    
    const id = req.params.id; 
    Category.destroy({ 
        where: { id}
    })
        .then((category) => {
            if (category) res.send('category eliminated')
            else res.send('category not found')
        })
        .catch(err => res.send(err)) 
})

module.exports = server;