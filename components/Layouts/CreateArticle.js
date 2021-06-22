import React, { Fragment } from 'react';
import Nav from '../LoggedPage/Nav';
import AdditionForm from '../ArticleForm/AdditionForm';

function CreateArticle() {
  return (
    <Fragment>
      <Nav />
      <AdditionForm />
    </Fragment>
  );
}

export default CreateArticle;
