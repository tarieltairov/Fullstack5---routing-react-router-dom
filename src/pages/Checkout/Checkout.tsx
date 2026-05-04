import './Checkout.css';

export function Checkout() {
  const isSubmitting = false;

  return (
    <div className='checkout'>
      <h1 className='checkout__title'>Оформление заказа</h1>

      <div className='checkout__layout'>
        <form className='checkout__form'>
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
            />

            <span className='checkout__error'>
              Имя должно содержать минимум 2 символа
            </span>
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
            />

            <span className='checkout__error'>
              Введите корректный номер телефона
            </span>
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
            />
            <span className='checkout__error'>
              Адрес должен содержать минимум 5 символов
            </span>
          </div>

          {/* комментарий */}
          <div className='checkout__field'>
            <label htmlFor='comment'>Комментарий к заказу</label>

            <textarea
              name='comment'
              id='comment'
              placeholder='Например позвонить за час до доставки'
              rows={3}
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

        <aside>aside</aside>
      </div>
    </div>
  );
}
