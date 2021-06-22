import { useState } from 'react';
import SignUp from '../Form/SignUp';
import SignIn from '../Form/SignIn';

function Modal(props) {
  const [login, setLogin] = useState(false);
  const changeHandler = () => {
    setLogin((prev) => !prev);
  };
  return (
    <div className='w-96 rounded-md h-96 bg-gray-300 relative flex flex-col  items-center justify-center'>
      {login && <SignUp onSignUp={changeHandler} />}
      {!login && <SignIn onSignIn={changeHandler} />}
      <button
        onClick={props.onShow}
        className='absolute top-0 right-0 cursor-pointer text-red-400 border p-2 border-black'>
        X
      </button>
    </div>
  );
}

export default Modal;
