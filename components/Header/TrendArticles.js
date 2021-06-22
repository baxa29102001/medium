import React, { useState, useEffect } from 'react';
import ArticleItem from '../Articles/ArticleItem';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../Ui/LoadingSpinner';
export const dummy_Data = [
  {
    id: 'm1',
    title: 'Kelajagingni bilmoqchimsan ?',
    capture: 'Xarakteringga qara!',
    duration: '7 min',
    createdAt: '13 june',
    author: 'Aziz Rakhimov',
    imgAuthor: 'https://i.ytimg.com/vi/xHyGd_rBzM8/maxresdefault.jpg',
  },
  {
    id: 'm2',
    title: 'Ehtiyoj har narsaga qodir!',
    capture:
      'Қандай қилиб Австралиялик оддий талаба қиз 15 миллиард долларлик стартап яратганлиги ҳақида.',
    duration: '5 min',
    createdAt: '5 may',
    author: 'Allaev Uz',
    imgAuthor:
      'https://static10.tgstat.ru/channels/_0/7f/7f31e970ed59b216acd402514e837735.jpg',
  },
  {
    id: 'm3',
    title: 'Бизнес билан шуғулланиб бўлмас экан. Бизнес билан яшаш керак экан!',
    capture:
      ' Математиклар - рақамларга, юристлар - қонунларга, фақат аҳмоқларгина сўзларга таянадилар!',
    duration: '4 min',
    createdAt: '2 july',
    author: 'Alisher Isaev',
    imgAuthor:
      'https://thumb.tildacdn.com/tild3734-3261-4362-b434-313462303439/-/resize/460x/-/format/webp/1-photo.png',
  },
  {
    id: 'm4',
    title: 'Бизнес билан шуғулланиб бўлмас экан. Бизнес билан яшаш керак экан!',
    capture:
      ' Математиклар - рақамларга, юристлар - қонунларга, фақат аҳмоқларгина сўзларга таянадилар!',
    duration: '4 min',
    createdAt: '2 july',
    author: 'Alisher Isaev',
    imgAuthor:
      'https://thumb.tildacdn.com/tild3734-3261-4362-b434-313462303439/-/resize/460x/-/format/webp/1-photo.png',
  },
];

function TrendArticles(props) {
  const state = useSelector((state) => state.articles);

  if (!state.data) {
    return <LoadingSpinner />;
  }
  return (
    <div className='p-3 border-b-2 border-gray-300 mb-5'>
      <h1 className='text-2xl font-extrabold text-center mb-4'>
        <span>
          <i className='ri-line-chart-line border border-black rounded-full mr-2 p-2'></i>
        </span>
        Trendagi Maqolalar
      </h1>
      <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {state.data.map((item) => (
          <ArticleItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TrendArticles;
