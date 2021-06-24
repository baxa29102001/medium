import { Fragment, useEffect } from 'react';
import LoggedLayout from '../components/Layouts/LoggedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from '../stores/articleReducer';
import Redirect from '../components/Form/Redirect';
import { useLogin } from '../utils/hooks/tokenRequest';

import axios from 'axios';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const { tokenRequest } = useLogin();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const data = props.articles.articles;
  useEffect(() => {
    dispatch(articleActions.success(data));
    const token = localStorage.getItem('token');
    if (token) {
      tokenRequest('http://localhost:3000/api/login');
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
