import React from 'react';
import Link from 'next/link';

function ArticleItem(props) {
  const { title, author, imgAuthor, duration, createdAt, capture, _id } =
    props.item;
  return (
    <li className='p-5 col-span-1 '>
      <div className='flex items-center mb-2'>
        <img
          src={imgAuthor}
          className='w-11 h-11 rounded-full mr-4'
          alt='Rasm'
        />
        <h4 className='lg:text-lg sm:text-sm md:text-base text-black font-medium cursor-pointer'>
          {author}
        </h4>
      </div>
      <Link href={`/${_id}`}>
        <h1 className='lg:text-xl sm:text-lg md:text-xl font-bold mb-2 cursor-pointer'>
          {title}
        </h1>
      </Link>
      <h3 className='lg:text-base sm:text-sm md:text-base font-semibold mb-1'>
        {capture}
      </h3>
      <div className='w-48 flex justify-between items-center'>
        <div className='flex items-center'>
          <p className='text-sm font-light text-gray-400 mr-3'>{createdAt}</p>
          <p className='text-sm font-light text-gray-400 mr-2'>
            {duration} vaqt
          </p>
          <i className='ri-star-s-fill text-gray-400'></i>
        </div>
        <i className='ri-file-mark-line text-xl cursor-pointer' id={_id}></i>
      </div>
    </li>
  );
}

export default ArticleItem;
