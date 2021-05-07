const { getProductsByLetterIncludeInTheName } =require('../../controllers/productController');
const server = require("express").Router();
const { Product } = require("../../db.js");
const categories = ["helado", "hamburguesas", "pizza", "bebidas", "frutas", "cereales", "carnes", "verduras"];

const romanNumbers = ['I', 'II', 'III', 'IV', 'V']

const randomNumber = (min, max) => (Math.random() * (max - min) + (min + 0.5)) | 0
const randomMessage = (val) => lorem.slice(0, (Math.random() * (val - 1) + 1.5) | 0)
const lorem = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

var p = new Promise(resolve => resolve(true))


  categories.forEach((category, i) => {
      for (let j = 0; j < 5; j++) {
          p = p.then(() => (
              Product.create({
                  name: category + " " + romanNumbers[j],
                  description: randomMessage(255),
                  price: randomNumber(50, 200),
                  stock:  randomNumber(10, 30),
                  img:"imagen"
              })
          ))
          .then( product => {
              product.setCategories([i + 1]);
              // return product.setImages([i + 1]);
          })
      }
  })


  server.get("/search/:query", (req, res, next) => {
    let { query } = req.params;
    return getProductsByLetterIncludeInTheName(query).then((product) => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
  });

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
server.post("/", async(req, res, next) => {
  console.log(req.body);
  let { name, description, price, stock, img, category } = req.body;

  

  let product = {
    name, description, price, stock, img, category
  };

  return await Product.create(product).then((product) => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
});

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
