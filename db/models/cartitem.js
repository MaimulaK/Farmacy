const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate({ Cart, Product }) {
      this.belongsTo(Cart, { foreignKey: 'cartId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  CartItem.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      cartId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      count: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'CartItem',
    }
  );
  return CartItem;
};
