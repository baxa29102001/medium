import { Fragment } from 'react';

function ErrorModal({ msg, closeModal }) {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 right-0 z-40 bottom-0 bg-black opacity-95 flex justify-center items-center'>
        <div className='bg-white w-96 rounded-md '>
          <div className='p-5 '>
            <h2 className='text-3xl font-extrabold'>
              Foyalanuvchi tomonidan xatolik
            </h2>
            <p className='bg-red-400 py-2 px-3 text-white text-xl rounded-md mt-2'>
              {msg}
            </p>
            <button
              onClick={closeModal}
              className='mt-2 bg-red-600 text-white p-3 rounded-lg focus:outline-none'>
              Xatoni to'grlash
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ErrorModal;
