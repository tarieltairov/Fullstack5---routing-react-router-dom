import { useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { CATEGORIES, products } from '../../mock/products';
import './Main.css';
import { useSearchParams } from 'react-router-dom';

export function Main() {
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='main-page'>
      <h1 className='main-page_title'>Каталог</h1>

      <div className='main-page_controls'>
        <input
          className='main-page_search'
          type='text'
          placeholder='Найти товар'
          onChange={(e) => setSearchParams({ search: e.target.value })}
        />

        <select className='main-page_select'>
          <option value=''>Все категории</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className='products-list'>
        {filtered.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>

      <Pagination page={page} onChange={setPage} tolalPages={6} />
    </div>
  );
}
