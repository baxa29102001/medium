import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React, { Fragment } from 'react';
import OneArticleLayout from '../../components/Layouts/OneArticleLayout';
import { useLogin } from '../../utils/hooks/tokenRequest';
import Redirect from '../../components/Form/Redirect';
import { server } from '../../config';
import axios from 'axios';

function OneArticle(props) {
  const { tokenRequest } = useLogin();
  const isLogged = useSelector((state) => state.auth.isLogged);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenRequest(`${server}/api/login`);
    }
  }, []);
  const singleArticle = props.article;

  if (!isLogged) {
    return (
      <Redirect>
        <p className='text-4xl'>Redirect page no authorized </p>
      </Redirect>
    );
  }
  return (
    <Fragment>
      <OneArticleLayout singleArticle={singleArticle} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${server}/api/articles`);
  const paths = data.articles.map((post) => ({
    params: { articleId: post._id },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.articleId;
  const { data } = await axios.get(`${server}/api/singleArticle?id=${id}`);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article: data,
    },
    revalidate: 1,
  };
}
export default OneArticle;
