import { useDispatch } from 'react-redux';
import { authActions } from '../../stores/authReducers';
import { token } from './authApi';
import axios from 'axios';

export const useLogin = () => {
  const dispatch = useDispatch();
  const tokenRequest = (url) => {
    dispatch(
      authActions.tokenRequests({
        data: '',
        status: 'Pending',
        error: null,
      })
    );
    try {
      axios
        .post(url, null, {
          headers: {
            token: token(),
          },
        })
        .then((res) => {
          dispatch(
            authActions.tokenRequests({
              data: res.data,
              status: 'Success',
              error: null,
            })
          );
        });
    } catch (error) {
      console.log(error);
      dispatch(
        authActions.tokenRequests({
          data: '',
          status: 'Error',
          error: error,
        })
      );
    }
  };

  return {
    tokenRequest,
  };
};
