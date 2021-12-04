import { createSelector } from 'reselect';

const dataSelector = (state) => state.data;

export const selectProductBySlug = (slug) => createSelector(
  dataSelector,
  (state) => {
    return state.products?.find(e => encodeURIComponent(e.slug ?? '') === slug);
  }
);

export const selectTopProducts = createSelector(
  dataSelector,
  (state) => state.topProducts ?? [],
)

export const selectPopularProducts = createSelector(
  dataSelector,
  (state) => state.popularProducts ?? [],
)

export const selectNewProducts = createSelector(
  dataSelector,
  (state) => state.newProducts ?? [],
)
