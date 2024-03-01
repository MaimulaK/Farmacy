/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Memes', [
      {
        img: 'https://sun9-37.userapi.com/impg/yaqFYpMs20zqiVQqPrzKNSRVYW_ouv8mwOnFGQ/ebh9zNZr934.jpg?size=1620x2160&quality=95&sign=27469bdd7766ce00cb6d07b57ab11764&type=album',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://sun9-75.userapi.com/impg/3M5k8PICyTN7gdz1m1PkFz29Cm_w_TZnWfFtfA/kvydnxpJkWY.jpg?size=1620x2160&quality=95&sign=d7182a09802ebb6f7e56bc6a237f8226&type=album',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://sun9-47.userapi.com/impg/rcj0L2y6aPHmijRc7wJIZU2nk_Bwd8cYcKiHdg/OGPbfPP9Hr0.jpg?size=1620x2160&quality=95&sign=579bf15e81258a6fdec2cd356b51a032&type=album',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://sun9-57.userapi.com/impg/f5iphbqhU5jcplCXal0MLNCVKx5_heo2mYLhAQ/RiPzYM6soZo.jpg?size=1620x2160&quality=95&sign=1f518dc80f55eee484354e7b336a49d5&type=album',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Memes', null, {});
  },
};
