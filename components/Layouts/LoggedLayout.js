import React from 'react';
import Nav from '../LoggedPage/Nav';
import MainArticles from '../LoggedPage/MainArticles';
import TrendArticles from '../Header/TrendArticles';

function LoggedLayout() {
  return (
    <div className='container mx-auto '>
      <Nav />
      <MainArticles />
      <TrendArticles />
    </div>
  );
}

export default LoggedLayout;
