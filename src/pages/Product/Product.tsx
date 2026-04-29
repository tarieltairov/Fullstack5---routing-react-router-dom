import { Navigate, useLocation, useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import './Product.css';
import { BackButton } from '../../components/BackButton';
import { useCart } from '../../context/CartContext';
import { Counter } from '../../components/Counter';

export function Product() {
  const location = useLocation();

  const { id } = useParams();

  const { addToCart, getItemQuantity } = useCart();

  const currentProduct = products.find((item) => item.id === Number(id));

  if (!currentProduct) {
    return <Navigate to='/' replace />;
  }

  const inCart = getItemQuantity(currentProduct.id) > 0;

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

      <div className='product-page_actions'>
        {inCart ? (
          <Counter productId={currentProduct.id} />
        ) : (
          <button
            className='product-page_btn'
            onClick={() => addToCart(currentProduct)}
          >
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
}
