import { ProductCard } from '../../components/ProductCard';
import { products } from '../../mock/products';
import './Main.css';
import { useSearchParams } from 'react-router-dom';

export function Main() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='main-page'>
      <h1 className='main-page_title'>Главная страница</h1>

      <input
        className='main-page_search'
        type='text'
        placeholder='Найти товар'
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />

      <div className='products-list'>
        {filtered.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
}
