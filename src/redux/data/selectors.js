import { createSelector } from 'reselect';

const dataSelector = (state) => state.data;

export const selectProductBySlug = (slug) => createSelector(
  dataSelector,
  (state) => {
    return state.products?.find(e => encodeURIComponent(e.slug ?? '') === slug);
  }
);
