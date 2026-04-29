import {
  // Link,
  NavLink,
} from 'react-router-dom';
import './Header.css';
import { useCart } from '../../context/CartContext';

// Link - простая ссылка
// NavLink - ссылка с активным состоянием

interface HeaderRoute {
  to: string;
  label: string;
  badge?: number;
}

export function Header() {
  const { totalCount } = useCart();

  const pages: HeaderRoute[] = [
    {
      to: '/',
      label: 'Главная',
    },
    {
      to: '/cart',
      label: 'Корзина',
      badge: totalCount,
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

  return (
    <header>
      <div className='header_logo'>Shop</div>

      <nav className='header_nav'>
        {pages.map((route, index) => (
          <NavLink
            className={(val) =>
              `${val.isActive ? 'active_link' : ''} ${route.badge ? 'header_cart' : ''} header_link `
            }
            key={index}
            to={route.to}
          >
            {route.label}

            {!!route.badge && (
              <span className='header_cart_badge'>{route.badge}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
