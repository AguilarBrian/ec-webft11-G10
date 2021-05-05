const server = require("express").Router();
const { Product } = require("../../db.js");


// TRAE TODOS LOS PRODUCTOS |
//---------------------------
server.get("/", (req, res, next) => {
  
  Product.findAll() 
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

// TRAE UN PRODUCTO POR ID |
//--------------------------
server.get("/:id", (req, res, next) => {
  
  const { id } = req.params;

  Product.findOne({ where: {  id } })
    .then((product) => {
      if (!product) return res.send("product not found");
      res.send(product);
    })
    .catch(next);
});

// AGREGAR UN PRODUCTO |
//----------------------
server.post("/", (req, res) => {
  
  const { name, description, price, stock, category, img } = req.body; 
  if (!name || !price || !description ||!stock|| !category || !img) {
    
    return res.send("Es necesario completar el campo name y price");
  }
  Product.create({
    
    name: name,
    description: description,
    price: price,
    stock: stock,
    img: img,
  }).then((product) => {
    return product.setCategories(category).then(
      () => res.send(product),
      () => res.send('no se pudo agregar la categoria'))
  }).catch((err) => res.send(err))
})

// MODIFICA UN PRODUCTO |
//-----------------------
server.put("/:id", (req, res) => {
  
  const id = req.params.id; 
  const { name, description, price, stock, category, img } = req.body; 

  Product.findOne({ where: {  id } })
    .then((product) => {
      if (!product) {
        res.send("product not found"); 
      } else {
        product.update({
          name,
          description,
          price,
          stock,
          category,
          img,
        });
        res.send(product); 
      }
    })
    .catch((err) => res.send(err)); 
});

// MODIFICA LA CANTIDAD DEL PRODUCTO |
//------------------------------------
server.put("/:id/quantity",(req, res) => {
  const id = req.params.id; 
  const { stock } = req.body;

  Product.findOne({ where: { id } })
  .then((product) => {
    if (!product) {
      res.send("product not found"); 
    } else {
      product.update({ stock });
      res.send(product); 
    }
  })
  .catch((err) => res.send(err)); 
})


// ELIMINA UN PRODUCTO |
//----------------------
server.delete("/:id", (req, res) => {
  
  const id = req.params.id; 
  
  Product.destroy({
    
    where: {  id },
  })
    .then((product) => {
      if (product) res.send("product eliminated");
      
      else res.send("product not found"); 
    })
    .catch((err) => res.send(err)); 
});

module.exports = server;
