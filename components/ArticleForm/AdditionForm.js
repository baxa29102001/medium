import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import NewStory from './NewStory';
import LoadingSpinner from '../Ui/LoadingSpinner';

function AdditionForm() {
  const auth = useSelector((state) => state.auth);
  const [dataForm, setDataForm] = useState({
    title: '',
    capture: '',
    duration: '',
  });

  if (!auth.notify) {
    return <LoadingSpinner />;
  }

  const { title, capture, duration } = dataForm;

  const userImg = auth.notify && auth.notify.data.user;

  const sendForm = () => {
    const articleObj = {
      ...dataForm,
      author: userImg.userName,
      createdAt: 'June 18',
      imgAuthor: userImg.imgAuthor,
      authorId: userImg._id,
    };

    return articleObj;
  };

  const changeHandler = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <form className='p-2 ml-14'>
        <label htmlFor='title' className='block text-lg font-extrabold'>
          Maqola Sarlavhasi
        </label>
        <input
          type='text'
          name='title'
          autoComplete='off'
          id='title'
          value={title}
          onChange={changeHandler}
          className='w-full md:w-3/4 lg:w-2/4 border rounded-md border-gray-400 px-3 py-1 focus:outline-none'
        />
        <label htmlFor='desc' className='block text-lg font-extrabold'>
          Maqola tavsifi
        </label>
        <textarea
          value={capture}
          name='capture'
          onChange={changeHandler}
          id='desc'
          className='block w-full md:w-3/4 lg:w-2/4 h-32 resize-none border border-gray-400 rounded-md  mt-2 focus:outline-none p-2'></textarea>
        <label htmlFor='min' className='text-lg block font-extrabold mt-3'>
          O'qilish vaqti (min)
        </label>
        <input
          value={duration}
          name='duration'
          onChange={changeHandler}
          id='min'
          type='number'
          min='0'
          className='block  w-full md:w-3/4 lg:w-2/4  border rounded-md border-gray-400 px-3 py-1 focus:outline-none '
        />
      </form>
      <NewStory form={sendForm} />
    </Fragment>
  );
}

export default AdditionForm;
