import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import styles from './ProductCard.module.scss';
import { useCart } from '../../context/CartContext';
import { Counter } from '../Counter';

type ProductCardProps = Product;

export function ProductCard(product: ProductCardProps) {
  const { id, imageUrl, title, price } = product;

  const { addToCart, getItemQuantity } = useCart();

  const navigate = useNavigate();

  const isInCart = getItemQuantity(id) > 0;

  return (
    <div className={styles.productCard}>
      <img
        onClick={() => navigate(`/product/${id}`, { state: { from: '/' } })}
        className={styles.productCard_img}
        src={imageUrl}
        alt='product-image'
        onError={(event) => {
          event.currentTarget.src = `https://placehold.co/400x400/16a34a/ffffff?text=${title}`;
        }}
      />
      <h3 className={styles.productCard_title}>{title}</h3>
      <p className={styles.productCard_price}>{price}</p>

      <div className={styles.productCard__actions}>
        {isInCart ? (
          <Counter productId={id} />
        ) : (
          <button
            className={styles.productCard__btn}
            onClick={() => addToCart(product)}
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}
