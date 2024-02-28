const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DiscountProduct extends Model {
    static associate({ Discount, Product }) {
      this.belongsTo(Discount, { foreignKey: 'discountId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  DiscountProduct.init(
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
      modelName: 'DiscountProduct',
    }
  );
  return DiscountProduct;
};
