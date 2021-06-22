import React from 'react';
import { useSelector } from 'react-redux';
import ArticleList from '../Articles/ArticleList';
import ArticleItem from '../Articles/ArticleItem';
import { dummy_Data } from '../Header/TrendArticles';
import Following from './Following';
import Category from '../Main/Category';
import LoadingSpinner from '../Ui/LoadingSpinner';

function MainArticles() {
  const articles = useSelector((state) => state.articles.data);

  if (!articles) {
    return <LoadingSpinner />;
  }
  const leng = articles.length > 3 ? 3 : articles.length;
  const arr = [];
  for (let i = 0; i < leng; i++) {
    arr.push(articles[i]);
  }
  return (
    <div className='md:block lg:flex mt-9 border-b border-gray-500'>
      <div className='md:flex lg:flex md:w-full lg:w-3/4 border-b md:border-b lg:border-b-0 lg:border-r  md:border-r-0 border-gray-400'>
        <ul className='md:w-4/5 lg:w-2/4 border-b  md:border-b-0 border-gray-400'>
          <div className='flex justify-center items-center p-6'>
            <img
              src='https://static10.tgstat.ru/channels/_0/7f/7f31e970ed59b216acd402514e837735.jpg'
              className='w-96 h-64 rounded '
            />
          </div>
          <div className='ml-6 md:m-0 lg:0'>
            <ArticleItem item={dummy_Data[0]} />
          </div>
        </ul>
        <ArticleList articles={arr} />
      </div>
      <div className='block md:flex lg:block'>
        <Following />
        <div className='ml-3'>
          <Category />
        </div>
      </div>
    </div>
  );
}

export default MainArticles;
