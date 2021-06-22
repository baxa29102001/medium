import React from 'react';
import ArticleItem from './ArticleItem';

function ArticleList(props) {
  return (
    <ul className='grid gap-4 '>
      {props.articles.map((item) => (
        <ArticleItem key={item._id} item={item} />
      ))}
    </ul>
  );
}

export default ArticleList;

//md:grid-cols-2 lg:grid-cols-3
