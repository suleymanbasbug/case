import * as actionTypes from "../actions/actionTypes";
let initialState = {
  userDetail: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    default:
      return state;
  }
};
