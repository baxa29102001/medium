import React, { Fragment } from 'react';
import OneArticle from '../Articles/OneArticle';
import Nav from '../LoggedPage/Nav';

function OneArticleLayout(props) {
  return (
    <Fragment>
      <Nav />
      <OneArticle singleArticle={props.singleArticle} />
    </Fragment>
  );
}

export default OneArticleLayout;
