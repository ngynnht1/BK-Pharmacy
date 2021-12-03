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
    const products = Object.values(state.cart ?? {});
    return products.reduce((total, p) => {
      total += p?.quantity ?? 0;
      return total;
    }, 0);
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

export const selectDraftOrder = createSelector(
  cartItemsSelector,
  (state) => state.draftOrder,
);

export const selectUserOrders = createSelector(
  cartItemsSelector,
  (state) => state.userOrders ?? [],
)

export const selectUserOrderDetails = createSelector(
  cartItemsSelector,
  (state) => state.selectedOrder,
)
