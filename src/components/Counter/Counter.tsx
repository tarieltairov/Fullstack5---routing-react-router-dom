import { useCart } from '../../context/CartContext';
import './Counter.css';

interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  const { getItemQuantity, increaseItem, decreaseItem } = useCart();

  const quantity = getItemQuantity(productId);

  const handleChangeCount = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    actionType: 'plus' | 'minus',
  ) => {
    e.stopPropagation();

    const action = actionType === 'plus' ? increaseItem : decreaseItem;

    action(productId);
  };

  return (
    <div className='counter'>
      <button
        className='counter__btn'
        onClick={(e) => handleChangeCount(e, 'minus')}
        aria-label='Уменьшить'
      >
        -
      </button>

      <span className='counter__value'>{quantity}</span>

      <button
        className='counter__btn'
        onClick={(e) => handleChangeCount(e, 'plus')}
        aria-label='Увеличить'
      >
        +
      </button>
    </div>
  );
}
