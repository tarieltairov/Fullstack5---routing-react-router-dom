import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';
import type { OrderErrors, OrderForm } from '../../types/order';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();

  const navigate = useNavigate();

  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const [errors, setErrors] = useState<OrderErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): OrderErrors => {
    const newErrors: OrderErrors = {};

    if (form.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 9) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (form.address.trim().length < 5) {
      newErrors.address = 'Адрес должен содержать минимум 5 символов';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
      setIsSubmitting(true);

      const order = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        items: cart,
        total: totalPrice,
        customer: form,
      };

      const saved = localStorage.getItem('orders');

      const orders = saved ? JSON.parse(saved) : [];
      orders.push(order);

      localStorage.setItem('orders', JSON.stringify(orders));

      clearCart();

      navigate('/checkout/success', {
        state: { orderId: order.id, total: order.total },
        replace: true,
      });
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='checkout'>
      <h1 className='checkout__title'>Оформление заказа</h1>

      <div className='checkout__layout'>
        <form className='checkout__form' onSubmit={handleSubmit}>
          {/* имя */}
          <div className='checkout__field'>
            <label htmlFor='name'>
              Имя <span className='required'>*</span>
            </label>

            <input
              id='name'
              name='name'
              type='text'
              placeholder='Введите имя'
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className='checkout__error'>{errors.name}</span>
            )}
          </div>

          {/* телефон */}
          <div className='checkout__field'>
            <label htmlFor='phone'>
              Телефон <span className='required'>*</span>
            </label>

            <input
              id='phone'
              name='phone'
              type='tel'
              placeholder='Введите номер телефона'
              value={form.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <span className='checkout__error'>{errors.phone}</span>
            )}
          </div>

          {/* Адрес */}
          <div className='checkout__field'>
            <label htmlFor='address'>
              Адрес <span className='required'>*</span>
            </label>

            <input
              type='text'
              id='address'
              name='address'
              placeholder='Укажите ваш адрес'
              value={form.address}
              onChange={handleChange}
            />

            {errors.address && (
              <span className='checkout__error'>{errors.address}</span>
            )}
          </div>

          {/* комментарий */}
          <div className='checkout__field'>
            <label htmlFor='comment'>Комментарий к заказу</label>

            <textarea
              name='comment'
              id='comment'
              placeholder='Например позвонить за час до доставки'
              rows={3}
              value={form.comment}
              onChange={handleChange}
            />
          </div>

          <button
            disabled={isSubmitting}
            className='checkout__submit'
            type='submit'
          >
            {isSubmitting ? 'Оформляем ...' : 'Подтвердить заказ'}
          </button>
        </form>

        <aside className='checkout__summary'>
          <h2 className='checkout__summary-title'>Ваш заказ</h2>

          <ul className='checkout__items'>
            {cart.map((item) => (
              <li key={item.id} className='checkout__item'>
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>{item.price * item.quantity} сом</span>
              </li>
            ))}
          </ul>

          <div className='checkout__total'>
            Итого: <b>{totalPrice} сом</b>
          </div>
        </aside>
      </div>
    </div>
  );
}
