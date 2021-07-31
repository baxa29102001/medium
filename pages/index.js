import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from '../stores/articleReducer';
import Head from 'next/head';
import Backdrop from '../components/Ui/Backdrop';
import HeaderLayout from '../components/Layouts/HeaderLayout';
import MainLayout from '../components/Layouts/MainLayout';
import Navbar from '../components/Header/Navbar';

import { authActions } from '../stores/authReducers';
import axios from 'axios';

export default function Home(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [show, setShow] = useState(false);

  const data = props.articles.articles;

  useEffect(() => {
    dispatch(articleActions.success(data));
    dispatch(authActions.actionDefault());
  }, []);

  if (isLogged) {
    router.replace('/main');
  }

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {show && <Backdrop show={show} onShow={showHandler} />}
      <Navbar onShow={showHandler} />
      <HeaderLayout />
      <MainLayout />
      <div className='grid-cols-2'>
        <div className='w-1/4 flex'>
          <img src='https://darinka.design/median/wp-content/uploads/Logo.png'></img>
          <h2 className='text-base'>Median</h2>
        </div>
        <div className='w-4/5'>
          <input type='text' placeholder='Search' />
          <button className=''>Kirish</button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://mediumblogdummy.herokuapp.com/api/articles`);
  const data = await res.json();

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
