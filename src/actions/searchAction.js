import { SEARCH } from './types';

/**
 * Get filtered list of images from API using passed value
 * @param {String} searchValue - text that uses for searching images.
 *                               Images will search by checking text at image
 */
export const findImages = (searchValue) => {
  console.log(`SEARCH_FIRN_REQUEST`);
  return { type: SEARCH.FIND_REQUEST, payload: { searchValue } };
};
