import * as actionTypes from "../actions/actionTypes";
let initialState = {
  postDetail: [{ id: 0, title: "", userId: 0, body: "" }],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload,
      };

    default:
      return state;
  }
};
