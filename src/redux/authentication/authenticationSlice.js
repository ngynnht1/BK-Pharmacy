import { createSlice } from '@reduxjs/toolkit'

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
} = authenticationSlice.actions;

export default authenticationSlice.reducer
