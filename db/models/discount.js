const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate({ DiscountProduct }) {
      this.hasMany(DiscountProduct, { foreignKey: 'discountId' });
    }
  }
  Discount.init(
    {
      discount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Discount',
    }
  );
  return Discount;
};
