import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function PrivateRoute() {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={'/login'} state={{ from: location.pathname }} replace />
    );
  }

  return <Outlet />;
}
