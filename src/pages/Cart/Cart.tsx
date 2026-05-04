import { useNavigate } from 'react-router-dom';
import { Counter } from '../../components/Counter';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export function Cart() {
  const { cart, removeItemFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className='cart'>
        <h2>Корзина пуста</h2>
      </div>
    );
  }

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const onRemoveItemClick = (
    productId: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    removeItemFromCart(productId);
  };

  return (
    <div className='cart'>
      <h1 className='cart__title'>Корзина</h1>

      <div className='cart__list'>
        {cart.map((item) => {
          return (
            <div
              onClick={() => handleProductClick(item.id)}
              key={item.id}
              className='cart__item'
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className='cart__item_img'
              />
              <div className='cart__item_right'>
                <h2 className='cart__item_title'>{item.title}</h2>
                <h3 className='cart__item_price'>{item.price} сом</h3>
                <div className='cart__item_controls'>
                  <Counter productId={item.id} />

                  <button
                    onClick={(e) => onRemoveItemClick(item.id, e)}
                    className='cart__item_remove'
                  >
                    Удалить
                  </button>
                </div>
                <p className='cart__item_subtotal'>
                  Сумма: <b>{item.price * item.quantity} сомы</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='cart__footer'>
        <div className='cart__total'>
          Итого: <b>{totalPrice} сом</b>
        </div>

        <button
          onClick={() => navigate('/checkout')}
          className='cart__checkout-btn'
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}
