import React, { Fragment, useRef } from 'react';
import { useAuth } from '../../utils/hooks/authApi';

function SignIn(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { sendRequest: requestBackend } = useAuth();

  const sendRequest = (e) => {
    e.preventDefault();

    let obj = {
      userName: emailRef.current.value,
      password: passwordRef.current.value,
    };

    requestBackend('http://localhost:3000/api/login', obj);
  };
  return (
    <Fragment>
      <h1 className='text-2xl font-extrabold mb-2'>Kirish</h1>
      <form
        className='flex flex-col  items-center justify-center'
        onSubmit={sendRequest}>
        <input
          ref={emailRef}
          type='text'
          className=' w-72 border-0 p-2 rounded-lg focus:outline-none focus:ring'
          placeholder='Email Pochta'
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