const { getProductsByLetterIncludeInTheName } = require('../../controllers/productController');
const server = require("express").Router();
const { Product } = require("../../db.js");
const randomNumber = (min, max) => (Math.random() * (max - min) + (min + 0.5)) | 0


const categories = [
{
  name:"helado de frutilla",
  deescripcion:"helado a la crema con chispas de chiocolate",
  price:randomNumber(50, 200),
  stock: randomNumber(10, 30),
  img: "http://cdn5.dibujos.net/dibujos/pintados/201634/helado-dulce-comida-lacteos-y-postres-10777766.jpg"
},

{name:"hamburguesa",
deescripcion:"hamburguesa mc donals y starbucks la pepa",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "http://cdn5.dibujos.net/dibujos/pintados/201948/hamburguesa-completa-comida-carnes-y-pescados-11668939.jpg"},

{name:"pizza",
deescripcion:"pizza a la piedra por metro",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://i.pinimg.com/originals/0f/98/bd/0f98bd9cc235d7fd32566645cb2dac37.jpg"},

{name:"bebidas",
deescripcion:"cerveza quilmes precio especial",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://i.pinimg.com/originals/12/f4/bc/12f4bcb5a9860d6ab2435e25400c0f93.jpg"},

{name:"frutas",
deescripcion:"fruta de estacion pepo",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://us.123rf.com/450wm/brgfx/brgfx1803/brgfx180300237/97011670-diferentes-tipos-de-frutas-en-el-fondo-blanco-ilustración.jpg?ver=6"},

{name:"cereales",
deescripcion:"cereal frutilopis promocion granja la prima pepa",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://us.123rf.com/450wm/lineartestpilot/lineartestpilot1603/lineartestpilot160313115/53444714-dibujado-a-mano-alzada-de-dibujos-animados-tazón-de-cereal.jpg?ver=6"},

{name:"carnes",
deescripcion:"carnes coloradas del norte centro de la mesopotamia granja la pepa",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://image.freepik.com/vector-gratis/conjunto-dibujos-animados-carne-fresca-porcion-filetes-cerdo-carne-vaca-aislada-fondo-blanco_97231-1018.jpg"},

{name:"verduras",
deescripcion:"verduras organicas de granja la pepa",
price:randomNumber(50, 200),
stock: randomNumber(10, 30),
img: "https://webdelmaestro.com/wp-content/uploads/2017/03/DIBUJOS-DE-FRUTAS-Y-VERDURAS.jpg"}];


var p = new Promise(resolve => resolve(true))


categories.forEach((category, i) => {
    p = p.then(() => (
      Product.findOrCreate({
        where: { name: category.name},
            defaults: {
              name: category.name,
              description: category.deescripcion,
              price: category.price,
              stock: category.stock,
              img: category.img
            }
      })   
    )).catch((err)=>console.log(err)) 
     
})

// TRAE TODOS LOS PRODUCTOS QUE INCLUYAN LAS LETRAS...|
//---------------------------
server.get("/search/:foodName", (req, res, next) => {
  let { foodName } = req.params;
  return getProductsByLetterIncludeInTheName(foodName).then((product) => {
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
      res.send(products)
      console.log('200 GET_PRODUCTS');
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// TRAE UN PRODUCTO POR ID |
//--------------------------
server.get("/:id", (req, res, next) => {

  const { id } = req.params;

  Product.findOne({ where: { id } })
    .then((product) => {
      if (!product) return res.send("product not found");
      res.send(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// AGREGAR UN PRODUCTO |
//----------------------
server.post("/", (req, res) => {

  const { productName, description, productImg, priceInt, stockInt, category } = req.body;
  const product = {
    name: productName,
    description: description,
    price: priceInt,
    stock: stockInt,
    img: productImg,
    category: category
  }
  
  Product.create(product).then((prod) => {
    return prod.setCategories(category).then(
      () => res.send(product))
  }).catch((error) => {
    res.status(400).json(error);
  });
})

// MODIFICA UN PRODUCTO |
//-----------------------
server.put("/:id", (req, res) => {

  const id = req.params.id;
  const { name, description, price, stock, category, img } = req.body;

  Product.findOne({ where: { id } })
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
    .catch((error) => {
      res.status(400).json(error);
    });
});

// MODIFICA LA CANTIDAD DEL PRODUCTO |
//------------------------------------
server.put("/:id/quantity", (req, res) => {
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
    .catch((error) => {
      res.status(400).json(error);
    });
})


// ELIMINA UN PRODUCTO |
//----------------------
server.delete("/:id", (req, res) => {

  const id = req.params.id;

  Product.destroy({

    where: { id },
  })
    .then((product) => {
      if (product) res.send("product eliminated");

      else res.send("product not found");
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
