import { Suspense } from 'react';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
