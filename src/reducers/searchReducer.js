import { SEARCH } from '../actions/types';

const initialState = {
  error: null,
  value: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.FIND_REQUEST: {
      return { ...state };
    }
    case SEARCH.FIND_SUCCESS: {
      return { ...state };
    }
    case SEARCH.FIND_FAILURE: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
