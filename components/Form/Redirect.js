import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { authActions } from '../../stores/authReducers';

function Redirect({ children }) {
  const dispatch = useDispatch();
  dispatch(authActions.actionDefault());
  const isLogged = useSelector((state) => state.auth.isLogged);
  const router = useRouter();

  if (!isLogged) {
    if (typeof document !== 'undefined') {
      router.push('/');
    }
  }

  return children;
}

export default Redirect;
