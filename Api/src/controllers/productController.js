const { Product, Categories  } = require("../db");
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
     // include: [{ model: Categories, as: "categories" }],
    });
  },
}