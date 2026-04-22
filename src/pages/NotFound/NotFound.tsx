import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='not-found-page'>
      <h1>Страница 404</h1>
      <p>Текущей страницы нет</p>

      <button onClick={() => navigate('/', { replace: true })}>
        Вернуться на главную
      </button>
    </div>
  );
}
