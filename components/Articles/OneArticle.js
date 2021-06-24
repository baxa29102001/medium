import React from 'react';
import FollowingLikes from './FollowingLikes';

function OneArticle({ singleArticle }) {
  const { title, capture, _id, imgAuthor, duration, createdAt, author, story } =
    singleArticle.articles;

  const story2 = JSON.parse(story);

  return (
    <div className='block md:flex'>
      <div className='w-full lg:w-2/4 p-4'>
        <h1 className='text-4xl  font-extrabold p-4'>{title}</h1>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full  mr-2' src={imgAuthor} />
            <h2 className='mr-2 text-green-800 font-bold text-xl'>{author}</h2>
            <p className='ml-5 text-gray-400 text-base'>{createdAt}</p>
            <p className='ml-4 text-gray-400 text-base'>{duration} min read</p>
          </div>
          <div>
            <i className='ri-file-mark-line text-xl cursor-pointer'></i>
          </div>
        </div>
        <div>
          {story2.map((item) => {
            if (item.type === 'header-three') {
              return (
                <p key={item.key} className='text-3xl my-2'>
                  {item.text}
                </p>
              );
            }
            return (
              <p key={item.key} className='my-2'>
                {item.text}
              </p>
            );
          })}
        </div>
      </div>
      <div className='w-60 md:w-96 order-first flex items-center ml-5 md:ml-0 md:sticky lg:sticky top-3 left-5 '>
        <FollowingLikes />
      </div>
    </div>
  );
}

export default OneArticle;
