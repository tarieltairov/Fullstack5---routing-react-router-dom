export type Category =
  | 'Молочные'
  | 'Мясо'
  | 'Овощи и фрукты'
  | 'Напитки'
  | 'Бакалея';

export interface Product {
  title: string;
  price: number;
  imageUrl: string;
  id: number;
  category: Category;
  description: string;
}
