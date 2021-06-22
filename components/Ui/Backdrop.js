import React from 'react';
import Modal from './Modal';

function Backdrop(props) {
  const { show, onShow } = props;
  return (
    <div
      className={`w-screen h-screen 
    bg-gray-100 fixed opacity-100
    top-0 left-0
    right-0 bottom-0
     z-10 flex justify-center items-center`}>
      {show && <Modal onShow={onShow} />}
    </div>
  );
}

export default Backdrop;
