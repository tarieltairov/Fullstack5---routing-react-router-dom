import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import './ProductCard.css';
import { useCart } from '../../context/CartContext';
import { Counter } from '../Counter';

type ProductCardProps = Product;

export function ProductCard(product: ProductCardProps) {
  const { id, imageUrl, title, price } = product;

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
        onError={(event) => {
          event.currentTarget.src = `https://placehold.co/400x400/16a34a/ffffff?text=${title}`;
        }}
      />
      <h3 className='product-card_title'>{title}</h3>
      <p className='product-card_price'>{price}</p>

      <div className='product-card__actions'>
        {isInCart ? (
          <Counter productId={id} />
        ) : (
          <button
            className='product-card__btn'
            onClick={() => addToCart(product)}
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}
