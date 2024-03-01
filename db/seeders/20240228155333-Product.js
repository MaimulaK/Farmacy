/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Узбогаин',
        img: 'https://slovaroid.ru/uploads/images/uzbagoiysya-mem.jpg',
        description: 'Препарат чтоб зачилиться',
        price: 799,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мотивациая Поднмин',
        img: 'https://i.pinimg.com/736x/e0/51/82/e051825d66432344e8b3dacf9cfc3aef.jpg',
        description: 'МОТИВАЦИЮ НАДО ПОДНЯЯЯТЬЬ!!!',
        price: 599,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Против болеей в мышцах!!!',
        img: 'https://stihi.ru/pics/2012/08/20/3392.jpg',
        description: 'Он принял боль за тебя!',
        price: 599,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тантум верде форте',
        img: 'https://memepedia.ru/wp-content/uploads/2017/11/%D1%82%D0%B8%D0%BC%D0%B0%D1%82%D0%B8-%D1%82%D0%B0%D0%BD%D1%82%D1%83%D0%BC-%D0%B2%D0%B5%D1%80%D0%B4%D0%B5-2.png',
        description: 'Где лучшие таблетки?У нас в аптеке!!',
        price: 599,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ВитаМишки Immuno+ пастилки жевательные, №30',
        img: 'https://static.vitaexpress.ru/public/images/webp_large_w/153463.webp',
        description:
          'Рекомендуется в качестве биологически активной добавки к пище - дополнительного источника витаминов С, Е, Д, цинка, селена для детей.',
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
        description:
          'Действующие вещества — диметикон-350 и изопарафины. Диметикон равномерно распределяется по волосистой части головы, обволакивает насекомых, закупоривает их дыхательные отверстия, перекрывая доступ кислорода. В результате вши начинают погибать уже на первой минуте. Средство действует на все формы — зрелые особи, личинки и гниды. Поэтому достаточно одного применения для уверенной победы над вшами и избавления от зуда. Не раздражает кожу и не всасывается, не имеет запаха, относится к малоопасным соединениям.',
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
