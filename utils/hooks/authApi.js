import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../stores/authReducers';

import axios from 'axios';

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sendRequest = (url, obj) => {
    dispatch(
      authActions.login({
        data: '',
        status: 'Pending',
        error: null,
      })
    );
    try {
      axios.post(url, obj).then((res) => {
        dispatch(
          authActions.login({
            data: res.data,
            status: 'Success',
            error: null,
          })
        );

        router.push('/main');
      });
    } catch (error) {
      dispatch(
        authActions.login({
          data: '',
          status: 'Error',
          error: error,
        })
      );
    }
  };

  return {
    sendRequest,
  };
};
