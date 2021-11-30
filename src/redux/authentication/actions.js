import api from '../../api';
import {
  getUser,
  getUserSuccess,
  getUserError,
  validateJTWError,
  validateJWTSuccess,
  logoutSuccess,
  createUserSuccess,
  createUserError,
} from './authenticationSlice';

export const loginAction = (
  email,
  password,
) => async dispatch => {
  try {
    dispatch(getUser());
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    await api.post('/user/login.php', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then((response) => dispatch(getUserSuccess(response.data)));

  } catch (e) {
    console.log(e);
    dispatch (getUserError(e?.message ?? ''));
  }
}

export const signupAction = (
  name,
  email,
  password,
  phone,
  address,
) => async dispatch => {
  try {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('phone', phone);
    form.append('name', name);
    form.append('address', address);
    await api.post('/user/register.php', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then((response) => dispatch(createUserSuccess(response.data)));
  } catch (e) {
    dispatch(createUserError(e?.message ?? ''));
  }
}

export const validateJWTAction = (
  jwt
) => async dispatch => {
  try {
    const form = new FormData();
    form.append('jwt', jwt);
    await api.post('/user/validate_token.php', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then((response) => dispatch(validateJWTSuccess({
        user: response.data.data,
        jwt,
      })));

  } catch (e) {
    dispatch(validateJTWError(e?.message ?? ''));
  }
}

export const logoutAction = () => async dispatch => {
  try {
    dispatch(logoutSuccess()); 
  } catch (e) {
    console.log(e);
  }
}
