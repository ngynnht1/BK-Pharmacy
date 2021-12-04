import { createSelector } from 'reselect';

const authSelector = (state) => state.auth;

export const selectUserInfo = createSelector(
  authSelector,
  (state) => {
    return {
      user: state.user,
      jwt: state.jwt,
      createUserSuccess: state.createUserSuccess ?? false,
    };
  }
);

export const selectShowAuthPopup = createSelector(
  authSelector,
  (state) => state.showAuthPopup ?? false,
);

export const selectRegistrationFormStatus = createSelector(
  authSelector,
  (state) => state.registrationFormStatus ?? false,
);
