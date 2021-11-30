import { createSelector } from 'reselect';

const authSelector = (state) => state.auth;

export const selectUserInfo = createSelector(
  authSelector,
  (state) => {
    return {
      user: state.user,
      jwt: state.jwt,
    };
  }
);
