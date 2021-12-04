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
  createUserSuccess: false,
  showAuthPopup: false,
  registrationFormStatus: false,
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
        state.createUserSuccess = undefined;
      },
      createUserSuccess: (state, action) => {
        state.creatingUser = false;
        state.createUserError = undefined;
        state.createUserSuccess = true;
      },
      createUserError: (state, action) => {
        const { error } = action.payload;
        state.creatingUser = false;
        state.createUserError = error;
      },
      cleanupCreateUser: (state, action) => {
        state.createUserError = undefined;
        state.creatingUser = false;
        state.createUserSuccess = undefined;
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
        state.createUserSuccess = undefined;
        state.user = undefined;
        state.jwt = undefined;
        setCookie('jwt', '', 1);
      },
      showAuthPopup: (state, action) => {
        state.showAuthPopup = action.payload;
      },
      showRegistrationFormStatus: (state, action) => {
        state.registrationFormStatus = action.payload;
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
  showAuthPopup,
  showRegistrationFormStatus,
  cleanupCreateUser,
} = authenticationSlice.actions;

export default authenticationSlice.reducer
