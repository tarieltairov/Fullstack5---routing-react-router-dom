import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

// <Outlet /> - окно, куда рендерится активный дочерний роут
// index - дефолтный дочерний роут для родителя

export function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
