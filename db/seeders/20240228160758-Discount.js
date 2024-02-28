/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Discounts', [
      {
        discount: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Discounts', null, {});
  },
};
