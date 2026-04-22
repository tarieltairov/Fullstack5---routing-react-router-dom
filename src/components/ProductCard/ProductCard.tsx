import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import './ProductCard.css';

type ProductCardProps = Product;

export function ProductCard({ imageUrl, price, title, id }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`, { state: { from: '/' } })}
      className='product-card'
    >
      <img className='product-card_img' src={imageUrl} alt='product-image' />
      <h3 className='product-card_title'>{title}</h3>
      <p className='product-card_price'>{price}</p>
    </div>
  );
}
