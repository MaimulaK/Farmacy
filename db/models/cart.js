const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, CartItem }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(CartItem, { foreignKey: 'cartId' });
    }
  }
  Cart.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
