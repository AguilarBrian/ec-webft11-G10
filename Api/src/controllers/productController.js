const { Product, Category  } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {

  getProductsByLetterIncludeInTheName: async (inputValue) => {
    return await Product.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + inputValue + '%'
        }
      },
      include: [{ model: Category, as: "categories" }],
    });
  },
  searchProductsByCategoryName(categoryName) {
    return Category.findAll({
      where: {
        name: {
          [Op.iLike]: categoryName
        }
      },
      include: [{ model: Product, as: 'products' }]
    })
  },
}