import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    price: 100,
    title: 'Молоко',
    category: 'Молочные',
    description: 'Свежее коровье молоко, жирность 3.2%. Срок хранения 5 дней.',
    imageUrl:
      'https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg',
  },
  {
    id: 2,
    price: 200,
    title: 'Колбаса',
    category: 'Мясо',
    description: 'Варёная колбаса высшего сорта, говядина и свинина.',
    imageUrl:
      'https://opis-cdn.tinkoffjournal.ru/mercury/01-kolbaski-sosiski.png',
  },
  {
    id: 3,
    price: 2000,
    title: 'Мясо',
    category: 'Мясо',
    description: 'Охлаждённая говяжья вырезка, премиум-качество.',
    imageUrl: 'https://chmknn.ru/wp-content/uploads/2017/08/150770.jpg',
  },
  {
    id: 4,
    price: 80,
    title: 'Кефир',
    category: 'Молочные',
    description: 'Кефир 1%, обогащённый бифидобактериями.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rwxOAk7kRGbUB0goHDIjgfPhhWrsD0ydaQ&s',
  },
  {
    id: 5,
    price: 150,
    title: 'Сыр',
    category: 'Молочные',
    description: 'Российский сыр, выдержка 60 дней.',
    imageUrl: 'https://www.apteka.ua/wp/wp-content/uploads/2015/09/345636.jpg',
  },
  {
    id: 6,
    price: 60,
    title: 'Яблоки',
    category: 'Овощи и фрукты',
    description: 'Яблоки сорта Гала, сладкие и хрустящие.',
    imageUrl:
      'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348',
  },
  {
    id: 7,
    price: 40,
    title: 'Картофель',
    category: 'Овощи и фрукты',
    description: 'Молодой картофель, идеален для жарки и варки.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETDstTEaSNNALGFN-dWT0RKtErNH2axNsdg&s',
  },
  {
    id: 8,
    price: 120,
    title: 'Сок апельсиновый',
    category: 'Напитки',
    description: 'Натуральный сок без сахара, 1 литр.',
    imageUrl: 'https://aqua-life.spb.ru/foto/114541013072020.jpg',
  },
  {
    id: 9,
    price: 50,
    title: 'Вода',
    category: 'Напитки',
    description: 'Питьевая вода без газа, 1.5 литра.',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20240305/original/pngtree-water-bottle-symbol-png-image_14513436.png',
  },
  {
    id: 10,
    price: 90,
    title: 'Хлеб',
    category: 'Бакалея',
    description: 'Свежий пшеничный хлеб из печи.',
    imageUrl:
      'https://m.dom-eda.com/uploads/images/catalog/item/88f4561953/ce4cf9522d_1000.jpg',
  },
  {
    id: 11,
    price: 250,
    title: 'Макароны',
    category: 'Бакалея',
    description: 'Макароны твёрдых сортов пшеницы, 500 г.',
    imageUrl: 'https://ananas.kg/image/cache/catalog/11667-700x770.jpg',
  },
  {
    id: 12,
    price: 70,
    title: 'Бананы',
    category: 'Овощи и фрукты',
    description: 'Спелые бананы из Эквадора, 1 кг.',
    imageUrl:
      'https://zakaz.s-globus.ru/media/Zakaz/Product/2024-04-10/Zakaz/Product/2024-04-10/343300fa2a36738d58195f8d79aa1770_0.jpg',
  },
];

export const CATEGORIES: Product['category'][] = [
  'Бакалея',
  'Молочные',
  'Мясо',
  'Напитки',
  'Овощи и фрукты',
];
