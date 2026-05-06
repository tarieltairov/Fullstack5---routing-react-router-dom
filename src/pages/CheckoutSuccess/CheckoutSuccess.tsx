import { Link, Navigate, useLocation } from 'react-router-dom';
import './CheckoutSuccess.css';

interface SuccessState {
  orderId: number;
  total: number;
}

export function CheckoutSuccess() {
  const location = useLocation();
  const state = location.state as SuccessState | null;

  // Если пользователь зашёл сюда напрямую (без оформления) — отправляем на главную
  if (!state) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className='success'>
      <div className='success__icon'>✓</div>
      <h1 className='success__title'>Заказ оформлен!</h1>
      <p className='success__text'>
        Спасибо за покупку. Номер вашего заказа: <b>#{state.orderId}</b>
      </p>
      <p className='success__text'>
        Сумма к оплате: <b>{state.total} сом</b>
      </p>
      <p className='success__hint'>
        Мы свяжемся с вами по указанному телефону для подтверждения доставки.
      </p>

      <Link to='/' className='success__btn'>
        Вернуться к покупкам
      </Link>
    </div>
  );
}
