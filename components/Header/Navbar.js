import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Navbar(props) {
  const [stick, setStick] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY >= 80) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`sm:w-full
     flex items-center sticky top-0 justify-between px-4 ${
       stick ? 'bg-white ' : ' bg-yellow-400'
     } border-b border-black`}>
      <div className='flex items-center'>
        <Image src='/logo.png' width='80' height='80' />
        <h2 className='text-3xl font-extrabold font-serif'>Maqola</h2>
      </div>
      <ul>
        <button onClick={props.onShow}>
          <li className='py-3 px-6 cursor-pointer text-white bg-gray-900 hover:bg-black rounded-md'>
            Login
          </li>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
