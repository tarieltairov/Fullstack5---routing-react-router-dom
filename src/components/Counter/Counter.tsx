import { useCart } from '../../context/CartContext';
import './Counter.css';

interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  const { getItemQuantity, increaseItem, decreaseItem } = useCart();

  const quantity = getItemQuantity(productId);

  return (
    <div className='counter'>
      <button
        className='counter__btn'
        onClick={() => decreaseItem(productId)}
        aria-label='Уменьшить'
      >
        -
      </button>

      <span className='counter__value'>{quantity}</span>

      <button
        className='counter__btn'
        onClick={() => increaseItem(productId)}
        aria-label='Увеличить'
      >
        +
      </button>
    </div>
  );
}
