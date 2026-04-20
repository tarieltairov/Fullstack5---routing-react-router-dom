import { Navigate, useParams } from 'react-router-dom';
import type { Product } from '../../types/product';
import { products } from '../../mock/products';

export function Product() {
  const { id } = useParams();

  const currentProduct = products.find((item) => item.id === Number(id));

  if (!currentProduct) {
    return <Navigate to='/' replace />;
  }

  return (
    <div>
      <h1>Страница продукта</h1>

      <h2>{currentProduct?.title}</h2>
      <p>цена: {currentProduct?.price}</p>
      <img src={currentProduct?.imageUrl} alt='' />
    </div>
  );
}
