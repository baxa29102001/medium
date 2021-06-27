import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../stores/authReducers';
import { useRouter } from 'next/router';
import Link from 'next/link';

function PersonalInfo(props) {
  const router = useRouter();
  const dispacth = useDispatch();
  const { notify } = useSelector((state) => state.auth);
  const { imgAuthor, userName } = notify.data.user;

  const exitHandler = () => {
    dispacth(authActions.logout());
    router.push('/');
  };
  return (
    <div className='w-40  shadow-xl bg-white rounded-md border border-gray-300  absolute top-16 right-10'>
      <div className='p-3 flex  items-center'>
        <img className='w-10 h-10 rounded-full' src={imgAuthor} />
        <h1 className='ml-2'>{userName}</h1>
      </div>
      <ul className='p-2 border-t border-gray-500'>
        <li className='text-lg font-semibold text-center'>
          <Link href='/new-story'>Hikoya yozish</Link>
        </li>
        <li className='text-base font-semibold text-center mt-2'>
          <button
            onClick={exitHandler}
            className='border-0 bg-gray-600 rounded-md focus:outline-none text-white px-5 py-1'>
            Chiqish
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
