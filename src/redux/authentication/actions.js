import api from '../../api';
import {
  getUser,
  getUserSuccess,
  getUserError,
} from './authenticationSlice';

export const loginAction = (
  email,
  password,
) => async dispatch => {
  try {
    dispatch(getUser());
    await api.post('/user/login.php', {
      email, password,
    })
      .then((response) => dispatch(getUserSuccess(response.data)));
  } catch (e) {
    console.log(e);
    dispatch (getUserError(e?.message ?? ''));
  }
}
