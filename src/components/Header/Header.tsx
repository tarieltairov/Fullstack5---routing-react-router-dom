import {
  // Link,
  NavLink,
} from 'react-router-dom';
import styles from './Header.module.scss';

import { useCart } from '../../context/CartContext';
import clsx from 'clsx';

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
    <header className={styles.header}>
      <div className={styles.header_logo}>Shop</div>

      <nav className={styles.header_nav}>
        {pages.map((route, index) => (
          <NavLink
            className={(val) =>
              clsx(styles.header_link, {
                [styles.active_link]: val.isActive,
                [styles.header_cart]: route.badge,
              })
            }
            key={index}
            to={route.to}
          >
            {route.label}

            {!!route.badge && (
              <span className={styles.header_cart_badge}>{route.badge}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
