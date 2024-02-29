/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Никоретте таблетки для рассасывания мятные 2мг, №20',
        img: 'https://static.vitaexpress.ru/public/images/webp_large_w/181361.webp',
        description: 'Лечение табачной зависимости путем снижения потребности в никотине и облегчения симптомов «отмены», возникающих при отказе от курения.',
        price: 799,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ВитаМишки Immuno+ пастилки жевательные, №30',
        img: 'https://static.vitaexpress.ru/public/images/webp_large_w/153463.webp',
        description: 'Рекомендуется в качестве биологически активной добавки к пище - дополнительного источника витаминов С, Е, Д, цинка, селена для детей.',
        price: 807,
        count: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vitascience Фитопассит капсулы, №30',
        img: 'https://static.vitaexpress.ru/public/images/webp_large_w/175507.webp',
        description: 'Способствует защите организма от стресса. ',
        price: 379,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Парадиз Ультра лосьон педикулицидное средство, 100мл',
        img: 'https://static.vitaexpress.ru/public/images/webp_large_w/192815.webp',
        description: 'Действующие вещества — диметикон-350 и изопарафины. Диметикон равномерно распределяется по волосистой части головы, обволакивает насекомых, закупоривает их дыхательные отверстия, перекрывая доступ кислорода. В результате вши начинают погибать уже на первой минуте. Средство действует на все формы — зрелые особи, личинки и гниды. Поэтому достаточно одного применения для уверенной победы над вшами и избавления от зуда. Не раздражает кожу и не всасывается, не имеет запаха, относится к малоопасным соединениям.',
        price: 279,
        count: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
