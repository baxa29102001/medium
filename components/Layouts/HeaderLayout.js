import React from 'react';
import MainHeader from '../Header/MainHeader';
import TrendArticles from '../Header/TrendArticles';

function HeaderLayout() {
  return (
    <header className=''>
      <MainHeader />
      <TrendArticles />
    </header>
  );
}

export default HeaderLayout;
