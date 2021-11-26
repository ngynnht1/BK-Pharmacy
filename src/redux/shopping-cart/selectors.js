import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cartItems;

export const selectCart = createSelector(
  cartItemsSelector,
  (state) => {
    return Object.values(state.cart ?? {});
  }
);

export const selectCartTotalProduct = createSelector(
  cartItemsSelector,
  (state) => {
    return Object.values(state.cart ?? {}).length;
  }
);

export const selectCartTotalAmount = createSelector(
  selectCart,
  (state) => {
    return state.reduce((total, item) => {
      const { quantity = 0, product } = item ?? {};
      total += quantity * ((Number(product?.price ?? 0)) * (1 - Number(product?.discount ?? 0)/100)) ;
      return total;
    }, 0);
  }
);
