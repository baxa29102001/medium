import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PersonalInfo from './PersonalInfo';
import LoadingSpinner from '../Ui/LoadingSpinner';

function Nav() {
  const { notify } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  if (!notify) {
    return <LoadingSpinner />;
  }

  let img;
  if (!notify.data.user) {
    img = 'https://i.ya-webdesign.com/images/male-head-silhouette-png-2.png';
  } else {
    img = notify.data.user.imgAuthor;
  }
  //notify && notify.data.user.imgAuthor;
  const showHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className='flex justify-between px-10 items-center'>
      <div className='flex items-center'>
        <Link href='/main'>
          <img
            src='/logo.png'
            className='w-14 h-14 md:w-20 md:h-20 cursor-pointer'
          />
        </Link>
        <Link href='/main'>
          <h2 className='text-sm md:text-3xl lg:text-3xl cursor-pointer font-extrabold font-serif'>
            Maqola
          </h2>
        </Link>
      </div>

      <ul className='flex items-center justify-evenly'>
        <li className='mr-6'>
          <i className='ri-search-line text-lg lg:text-2xl md:text-xl text-gray-800 cursor-pointer'></i>
        </li>
        <li className='mr-6'>
          <i className='ri-file-mark-line text-lg lg:text-2xl md:text-xl text-gray-800 cursor-pointer'></i>
        </li>
        <li className='mr-6'>
          <i className='ri-notification-3-line text-lg lg:text-2xl md:text-xl text-gray-800 cursor-pointer'></i>
        </li>

        <li className='border border-gray-400 rounded-full mr-4'>
          <img
            className='w-9 h-9 md:w-10 md:h-10 rounded-full  cursor-pointer'
            src={img}
            alt='Admin'
            onClick={showHandler}
          />
        </li>
      </ul>

      {show && <PersonalInfo />}
    </div>
  );
}

export default Nav;
