const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ CartItem, DiscountProduct }) {
      this.hasMany(CartItem, { foreignKey: 'productId' });
      this.hasMany(DiscountProduct, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
