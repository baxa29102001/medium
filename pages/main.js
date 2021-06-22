import { Fragment, useEffect } from 'react';
import LoggedLayout from '../components/Layouts/LoggedLayout';
import { useDispatch } from 'react-redux';
import { articleActions } from '../stores/articleReducer';
import Redirect from '../components/Form/Redirect';
import axios from 'axios';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const data = props.articles.articles;

  // if (typeof document !== 'undefined') {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return <Redirect />;
  //   }
  // }

  useEffect(() => {
    if (!data) {
      dispatch(articleActions.pending());
    } else {
      dispatch(articleActions.success(data));
    }
  }, [data]);
  return (
    <Fragment>
      <LoggedLayout />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3000/api/articles');

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      articles: data,
    },
  };
}

export default MainPage;
