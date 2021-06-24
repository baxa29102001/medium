import React, { Fragment, useRef, useState } from 'react';
import LoadingSpinner from '../Ui/LoadingSpinner';
import Success from '../Ui/Success';
import { useSelector } from 'react-redux';
import { useAuth } from '../../utils/hooks/authApi';
import { storage } from '../../utils/firebase/firebase';

function SignUp(props) {
  const { notify } = useSelector((state) => state);
  const [image, setImage] = useState(null);
  const [sideErr, setSideErr] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const { sendRequest } = useAuth();

  const imgHandler = (e) => {
    setImage(e.target.files[0]);
    console.log('hey');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!image) {
      setSideErr('Iltimos rasmingizni ham kiriting  (:');
      return;
    }
    storage
      .ref(`images/${image.name}`)
      .put(image)
      .then(() => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((res) => {
            let obj = {
              userName: emailRef.current.value,
              password: passwordRef.current.value,
              imgAuthor: res,
            };

            sendRequest('http://localhost:3000/api/auth', obj);
          });
      });
  };

  if (notify && notify.status === 'Pending') {
    return <LoadingSpinner />;
  }

  if (notify && notify.status === 'Success') {
    return <Success />;
  }
  if (!notify) {
    return (
      <Fragment>
        <h1 className='text-2xl font-extrabold mb-2'>Ro'yxatdan o'tish</h1>
        <form
          onSubmit={submitHandler}
          className='flex flex-col  items-center justify-center'>
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
            placeholder='Email pochta'
          />
          <input
            type='file'
            onChange={imgHandler}
            className='mt-2 w-72 border-0 p-2 rounded-lg focus:outline-none focus:ring'
          />
          <button
            type='submit'
            className='border-0 py-2 rounded-md  px-4 mt-3 bg-gray-400'>
            Yubormoq
          </button>
        </form>
        {sideErr && (
          <p className='text-white bg-red-400 py-2 px-4 mt-2'>{sideErr}</p>
        )}
        <p className='text-lg mt-4 font-bold'>Ro'yxatdan o'tdingizmi</p>
        <button
          onClick={props.onSignUp}
          className='border-0 mt-2 bg-gray-400 rounded-md py-2 px-4'>
          Kirish
        </button>
      </Fragment>
    );
  }
}

export default SignUp;
