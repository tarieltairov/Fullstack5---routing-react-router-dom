import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import './ProductCard.css';
import { useCart } from '../../context/CartContext';
import { Counter } from '../Counter';

type ProductCardProps = Product;

export function ProductCard({ imageUrl, price, title, id }: ProductCardProps) {
  const { addToCart, getItemQuantity } = useCart();

  const navigate = useNavigate();

  const isInCart = getItemQuantity(id) > 0;

  return (
    <div className='product-card'>
      <img
        onClick={() => navigate(`/product/${id}`, { state: { from: '/' } })}
        className='product-card_img'
        src={imageUrl}
        alt='product-image'
      />
      <h3 className='product-card_title'>{title}</h3>
      <p className='product-card_price'>{price}</p>

      <div className='product-card__actions'>
        {isInCart ? (
          <Counter productId={id} />
        ) : (
          <button
            className='product-card__btn'
            onClick={() => addToCart({ imageUrl, price, title, id })}
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}
