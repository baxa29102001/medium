import React, { Fragment, useEffect } from 'react';
import CreateArticle from '../components/Layouts/CreateArticle';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from '../stores/articleReducer';
import { useLogin } from '../utils/hooks/tokenRequest';
import Redirect from '../components/Form/Redirect';
import axios from 'axios';
import { server } from '../config';

function Story(props) {
  const dispatch = useDispatch();
  const { tokenRequest } = useLogin();
  const data = props.articles.articles;
  const isLogged = useSelector((state) => state.auth.isLogged);
  useEffect(() => {
    dispatch(articleActions.success(data));
    const token = localStorage.getItem('token');
    if (token) {
      tokenRequest(`${server}/api/login`);
    }
  }, []);
  if (!isLogged) {
    return (
      <Redirect>
        <p className='text-4xl'>Redirect page no authorized </p>
      </Redirect>
    );
  }
  return (
    <Fragment>
      <CreateArticle />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${server}/api/articles`);

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
