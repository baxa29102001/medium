import { articleActions } from '../../stores/articleReducer';
export function getArticles(data) {
  return async (dispatch) => {
    dispatch(articleActions.pending());

    try {
      dispatch(articleActions.success(data));
    } catch (error) {
      dispatch(articleActions.errHandler(error));
    }
  };
}
