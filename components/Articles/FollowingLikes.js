import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import LoadingSpinner from '../Ui/LoadingSpinner';
import { useLogin } from '../../utils/hooks/tokenRequest';

function FollowingLikes({ items }) {
  const [following, setFollowing] = useState(false);
  const { tokenRequest } = useLogin();
  const [followers, setFollowers] = useState({});

  const auth = useSelector((state) => state.auth.notify.data);
  useEffect(() => {
    if (auth) {
      const arr = auth.user.following;

      let user;
      let data;
      for (let i of arr) {
        user = i.followers.find((item) => item === items.authorId);
        data = i.followers.includes(items.authorId) ? i : undefined;
      }
      setFollowing(!!user);
      setFollowers(data);
    }
  }, [auth]);

  if (!auth) {
    return <LoadingSpinner />;
  }

  const followHandler = () => {
    setFollowing(true);
    const id = auth.user._id;
    const { author, imgAuthor, authorId } = items;

    let obj = {
      author: author,
      imgAuthor: imgAuthor,
      followers: authorId,
    };

    axios
      .post(`https://mediumblogdummy.herokuapp.com/api/${id}/follow`, obj)
      .then((res) => {
        tokenRequest('https://mediumblogdummy.herokuapp.com/api/login');
      });
  };

  const unFollowHandler = () => {
    setFollowing(false);
    let sure = confirm('Ishonchingiz komilmi');
    if (!sure) {
      setFollowing(true);
      return;
    }

    const followId = followers._id;
    let obj = {
      followId: followId,
      authorId: items.authorId,
    };

    const id = auth.user._id;
    axios
      .delete(`https://mediumblogdummy.herokuapp.com/api/${id}/follow`, {
        data: obj,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <div className='border-b border-gray-400 p-3'>
        <h1 className='text-xl font-bold mb-3'>{items.author}</h1>
        <button
          onClick={!following ? followHandler : unFollowHandler}
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
