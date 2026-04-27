import {
  // Link,
  NavLink,
} from 'react-router-dom';
import './Header.css';

// Link - простая ссылка
// NavLink - ссылка с активным состоянием

const pages = [
  {
    to: '/',
    label: 'Главная',
  },
  {
    to: '/cart',
    label: 'Корзина',
  },
  {
    to: '/about',
    label: 'О нас',
  },
  {
    to: '/login',
    label: 'Выйти с аккаунта',
  },
];

export function Header() {
  return (
    <header>
      <div className='header_logo'>Shop</div>

      <nav className='header_nav'>
        {pages.map((route, index) => (
          <NavLink
            className={(val) =>
              `${val.isActive ? 'active_link' : ''} header_link`
            }
            key={index}
            to={route.to}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
