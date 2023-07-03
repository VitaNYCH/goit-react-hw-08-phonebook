import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { MainDiv } from './Layout.styled';

export const Layout = () => {
  return (
    <MainDiv>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Outlet />
      </Suspense>
    </MainDiv>
  );
};
