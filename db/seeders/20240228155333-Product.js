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
        img: 'https://sun9-27.userapi.com/impg/XgqS_tjaUfVE0p68dEW805Wcf87H2oW9viWWDA/qqq6e7_4Sfo.jpg?size=597x597&quality=96&sign=edd4403b049d766da8858f78b506a8dc&type=album',
        description: 'МОТИВАЦИЮ НАДО ПОДНЯЯЯТЬЬ!!!',
        price: 599,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Против болеей в мышцах!!!',
        img: 'https://sun9-23.userapi.com/impg/qc1P0kpciSyazn3L9jedkIv2BLi8JdWMOaT4lw/bSmzRISy9jA.jpg?size=597x597&quality=96&sign=93c9eb027a6fa479390a058d403ad7ce&type=album',
        description: 'Он принял боль за тебя!',
        price: 599,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тантум верде форте',
        img: 'https://sun9-48.userapi.com/impg/lIZCf-QzuYad2Ih6W61f7dG901jStsW7e17IIQ/OCqoySXSf50.jpg?size=597x597&quality=96&sign=90c9125a2759de03b5a1fc9961509430&type=album',
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
