import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoggedIn = true;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    default: {
      return state;
    }
  }
}
