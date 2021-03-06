import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../stores/authReducers';

import axios from 'axios';
export function token() {
  let data = null;
  if (typeof document !== 'undefined') {
    data = localStorage.getItem('token') || '';
  }

  return data;
}

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sendRequest = (url, obj, token) => {
    dispatch(
      authActions.login({
        data: '',
        status: 'Pending',
        error: null,
      })
    );

    axios
      .post(url, obj, token)
      .then((res) => {
        dispatch(
          authActions.login({
            data: res.data,
            status: 'Success',
            error: null,
          })
        );

        router.push('/main');
      })
      .catch((error) => {
        dispatch(
          authActions.login({
            data: '',
            status: 'Error',
            error: error.message,
          })
        );
      });
  };

  return {
    sendRequest,
  };
};
