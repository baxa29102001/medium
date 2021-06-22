import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const isBrowser = () => typeof window !== 'undefined';

function Redirect({ routes, children }) {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const router = useRouter();

  if (isBrowser() && !isLogged) {
    router.push('/');
  }

  return children;
}

export default Redirect;
