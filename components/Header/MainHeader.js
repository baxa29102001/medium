import React, { Fragment } from 'react';
import Link from 'next/link';
import img from 'next/image';

function MainHeader() {
  return (
    <div className='grid grid-cols-2 bg-yellow-400 gap-6 border-b border-black'>
      <div className='w-screen md:w-auto p-6'>
        <h1 className='text-2xl md:text-4xl font-extrabold  mb-9 lg:text-6xl'>
          Eng yaxshi g'oyalarni shu yerdan topasiz
        </h1>
        <p className='lg:text-3xl sm:text-sm md:text-lg mb-9'>
          Yanada o'sish uchun obunachilarimiz yozgan maqolalarni korishingiz va
          ozingizni qiynagan savollarga javob olishing mumkun{' '}
        </p>
        <p className='transition cursor-pointer duration-500 ease-in-out bg-transparent border-2 border-black hover:bg-black hover:text-white text-black rounded-xl w-24 px-5 py-3 text-center'>
          <Link href='/login'>Login</Link>
        </p>
      </div>
      <div className='p-6 hidden md:grid justify-center'>
        <img
          src='/bg.png'
          className='w-44 h-56 none md:w-60 md:h-60 rounded-lg '
        />
      </div>
    </div>
  );
}

export default MainHeader;
