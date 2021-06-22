import axios from 'axios';
import React, { Fragment } from 'react';
import OneArticleLayout from '../../components/Layouts/OneArticleLayout';
function OneArticle(props) {
  const singleArticle = props.article;
  return (
    <Fragment>
      <OneArticleLayout singleArticle={singleArticle} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get('http://localhost:3000/api/articles');
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
  const { data } = await axios.get(
    `http://localhost:3000/api/singleArticle?id=${id}`
  );

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
