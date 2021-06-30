import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useAuth } from '../../utils/hooks/authApi';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../Ui/LoadingSpinner';
import Success from '../Ui/Success';

function SignIn(props) {
  const { notify } = useSelector((state) => state.auth);
  const [errShow, setErrShow] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const { sendRequest: requestBackend } = useAuth();

  const sendRequest = (e) => {
    e.preventDefault();

    let obj = {
      userName: emailRef.current.value,
      password: passwordRef.current.value,
    };

    requestBackend(`https://mediumblogdummy.herokuapp.com/api/login`, obj);
  };

  useEffect(() => {
    if (notify && notify.status === 'Error') {
      setErrShow('Bunday user topilmadi');
    }
  }, [notify]);

  if (notify && notify.status === 'Pending') {
    return <LoadingSpinner />;
  }

  if (notify && notify.status === 'Success') {
    return <Success />;
  }
  return (
    <Fragment>
      <h1 className='text-2xl font-extrabold mb-2'>Kirish</h1>
      {errShow && (
        <p className='py-2 px-3 bg-red-400 rounded-md text-white text-xl mb-2'>
          {errShow}
        </p>
      )}

      <form
        className='flex flex-col  items-center justify-center'
        onSubmit={sendRequest}>
        <input
          ref={emailRef}
          type='text'
          className=' w-72 border-0 p-2 rounded-lg focus:outline-none focus:ring'
          placeholder='Ism Sharif'
        />
        <input
          ref={passwordRef}
          type='text'
          className='mt-2 w-72 border-0 p-2 rounded-lg focus:outline-none focus:ring'
          placeholder='Password'
        />
        <button
          type='submit'
          className='border-0 py-2 rounded-md  px-4 mt-3 bg-gray-400'>
          Yubormoq
        </button>
      </form>

      <p className='text-lg mt-4 font-bold'>Sizning akkuntingiz yo'qmi</p>
      <button
        onClick={props.onSignIn}
        className='border-0 mt-2 bg-gray-400 rounded-md py-2 px-4'>
        Royxatdan o'tish
      </button>
    </Fragment>
  );
}

export default SignIn;
