import React from 'react';
import ArticleList from '../Articles/ArticleList';
import Category from '../Main/Category';
import { useSelector } from 'react-redux';
import { dummy_Data } from '../Header/TrendArticles';
import LoadingSpinner from '../Ui/LoadingSpinner';

function MainLayout() {
  const articles = useSelector((state) => state.articles.data);

  if (!articles) {
    return <LoadingSpinner />;
  }
  return (
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='md:order-2 lg:order-2'>
        <Category />
      </div>
      <div className='md:w-2/4 lg:w-2/4'>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default MainLayout;
