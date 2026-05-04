// есть 2 способа настройки маршрутизации (react-router-dom)
import './styles/global.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Product } from './pages/Product';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout';
import { CheckoutSuccess } from './pages/CheckoutSuccess';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='about' element={<h1>Страница О нас</h1>} />
        <Route path='product/:id' element={<Product />} />
        <Route path='cart' element={<Cart />} />

        <Route path='checkout' element={<Checkout />} />
        <Route path='checkout/success' element={<CheckoutSuccess />} />
      </Route>

      <Route path='/login' element={<h1>Страница авторизации</h1>} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
