import { createSlice } from '@reduxjs/toolkit'
import {
  setCookie,
} from '../../utils/localStorageHelper';

const initialState = {
  jwt: undefined,
  user: undefined,
  loadingUser: false,
  userError: undefined,
  creatingUser: false,
  createUserError: undefined,
}

export const authenticationSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      getUser: (state, _action) => {
        state.loadingUser = true;
        state.userError = undefined;
      },
      getUserSuccess: (state, action) => {
        const { data } = action.payload;
        setCookie('jwt', data?.jwt, 1);
        state.jwt = data?.jwt;
        state.user = data?.user;
        state.loadingUser = false;
        state.userError = undefined;
      },
      getUserError: (state, action) => {
        const { error } = action.payload;
        state.loadingUser = false;
        state.userError = error;
      },
      createUser: (state, _action) => {
        state.creatingUser = true;
        state.createUserError = undefined;
      },
      createUserSuccess: (state, action) => {
        state.creatingUser = false;
        state.createUserError = undefined;
      },
      createUserError: (state, action) => {
        const { error } = action.payload;
        state.creatingUser = false;
        state.createUserError = error;
      },
      validateJWTSuccess: (state, action) => {
        const { user, jwt } = action.payload;
        state.user = user;
        state.jwt = jwt;
      },
      validateJTWError: (state, _action) => {
        state.user = undefined;
        state.jwt = undefined;
        setCookie('jwt', '', 1);
      },
      logoutSuccess: (state, action) => {
        state.user = undefined;
        state.jwt = undefined;
        setCookie('jwt', '', 1);
      }
    },
})

// Action creators are generated for each case reducer function
export const {
  getUser,
  getUserSuccess,
  getUserError,
  createUser,
  createUserSuccess,
  createUserError,
  validateJTWError,
  validateJWTSuccess,
  logoutSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer
