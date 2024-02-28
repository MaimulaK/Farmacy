const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DiscoutProduct extends Model {
    static associate({ Discount, Product }) {
      this.belongsTo(Discount, { foreignKey: 'discountId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  DiscoutProduct.init(
    {
      discountId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Discounts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Discounts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'DiscoutProduct',
    }
  );
  return DiscoutProduct;
};
