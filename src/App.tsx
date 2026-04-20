// есть 2 способа настройки маршрутизации (react-router-dom)

import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Product } from './pages/Product';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<h1>Страница О нас</h1>} />
          <Route path='/login' element={<h1>Страница авторизации</h1>} />
          <Route path='/product/:id' element={<Product />} />

          <Route
            path='*'
            element={
              <div>
                <h1>Страница 404</h1>
                <p>Текущей страницы нет</p>
              </div>
            }
          />
        </Routes>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
