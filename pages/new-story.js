import React, { Fragment, useEffect } from 'react';
import CreateArticle from '../components/Layouts/CreateArticle';
import { useDispatch } from 'react-redux';
import { articleActions } from '../stores/articleReducer';
import axios from 'axios';

function Story(props) {
  const dispatch = useDispatch();
  const data = props.articles.articles;
  useEffect(() => {
    if (!data) {
      dispatch(articleActions.pending());
    } else {
      dispatch(articleActions.success(data));
    }
  }, [data]);
  return (
    <Fragment>
      <CreateArticle />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3000/api/articles');

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      articles: data,
    },
  };
}

export default Story;
