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

export const selectProvinces = createSelector(
  cartItemsSelector,
  (state) => state.provinces ?? [],
)

export const selectDistricts = createSelector(
  cartItemsSelector,
  (state) => state.districts ?? [],
)

export const selectWards = createSelector(
  cartItemsSelector,
  (state) => state.wards ?? []
)

export const selectServices = createSelector(
  cartItemsSelector,
  (state) => state.services ?? []
)

export const selectCalculatedFee = createSelector(
  cartItemsSelector,
  (state) => state.calculatedFee
)

// export const selectSelectedProvince = createSelector(
//   cartItemsSelector,
//   (state) => state.selectedProvince,
// )

export const selectSelectedProvince = createSelector(
  cartItemsSelector,
  (state) => state.selectedProvince ? state.provinces.find((p) => p.ProvinceID === parseInt(state.selectedProvince, 10)) : undefined,
)

export const selectSelectedDistrict = createSelector(
  cartItemsSelector,
  // (state) => state.selectedDistrict,
  (state) => state.selectedDistrict ? state.districts.find((p) => p.DistrictID === parseInt(state.selectedDistrict, 10)) : undefined,
)

export const selectSelectedWard = createSelector(
  cartItemsSelector,
  // (state) => state.selectedWard,
  (state) => state.selectedWard ? state.wards.find((p) => p.WardCode === state.selectedWard) : undefined,
)

export const selectSelectedService = createSelector(
  cartItemsSelector,
  // (state) => state.selectedService,
  (state) => state.selectedService ? state.services.find((p) => p.service_id === parseInt(state.selectedService, 10)) : undefined,
)