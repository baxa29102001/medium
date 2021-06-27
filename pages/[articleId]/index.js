import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React, { Fragment } from 'react';
import OneArticleLayout from '../../components/Layouts/OneArticleLayout';
import { useLogin } from '../../utils/hooks/tokenRequest';
import Redirect from '../../components/Form/Redirect';

function OneArticle(props) {
  const { tokenRequest } = useLogin();
  const isLogged = useSelector((state) => state.auth.isLogged);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenRequest(`https://mediumblogdummy.herokuapp.com/api/login`);
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
  const res = await fetch(`https://mediumblogdummy.herokuapp.com/api/articles`);
  const data = await res.json();
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
  const res = await fetch(
    `https://mediumblogdummy.herokuapp.com/api/singleArticle?id=${id}`
  );
  const data = await res.json();

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
