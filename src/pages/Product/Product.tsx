import { Navigate, useLocation, useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import './Product.css';
import { BackButton } from '../../components/BackButton';

export function Product() {
  const location = useLocation();

  const { id } = useParams();

  const currentProduct = products.find((item) => item.id === Number(id));

  if (!currentProduct) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className='product-page'>
      <BackButton
        btnText={
          location.state?.from === '/' ? 'Вернуться на главную' : 'Назад'
        }
      />

      <h1 className='product-page_title'>Страница продукта</h1>

      <h2 className='product-page_name'>{currentProduct.title}</h2>
      <p className='product-page_price'>цена: {currentProduct.price}</p>
      <img
        className='product-page_img'
        src={currentProduct.imageUrl}
        alt={currentProduct.title}
      />
    </div>
  );
}
