import { ProductCard } from '../../components/ProductCard';
import { products } from '../../mock/products';
import './Main.css';

export function Main() {
  return (
    <div>
      <h1>Главная страница</h1>

      <div className='products-list'>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
}
