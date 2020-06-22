export const FETCH_BRAND_ACTION = 'FETCH_BRAND';
export const FETCH_BRAND_SUCCESS_ACTION = 'FETCH_BRAND_SUCCESS';
export const FETCH_BRAND_ERROR_ACTION = 'FETCH_BRAND_ERROR';

export const fetchBrand = (brand: string) => ({
  type: FETCH_BRAND_ACTION,
  brand: brand
});
