import React, { useState } from 'react';

function FollowingLikes({ author }) {
  const [following, setFollowing] = useState(false);

  const followHandler = () => {
    setFollowing(!following);
  };
  return (
    <div>
      <div className='border-b border-gray-400 p-3'>
        <h1 className='text-xl font-bold mb-3'>{author}</h1>
        <button
          onClick={followHandler}
          className={`border-2 border-green-500 py-2 px-3 ${
            following ? 'bg-transparent' : 'bg-green-500'
          } ${
            following ? ' text-green-600' : 'text-white'
          } rounded-xl focus:outline-none`}>
          {following ? 'Following' : 'Follow'}
        </button>
      </div>
      <div className='flex items-center justify-around mt-3'>
        <div className='flex items-center'>
          <i className='ri-heart-3-line mr-2'></i>
          <p>24</p>
        </div>

        <div className='flex items-center'>
          <i className='ri-chat-3-line mr-2'></i>
          <p>4</p>
        </div>
      </div>
    </div>
  );
}

export default FollowingLikes;
