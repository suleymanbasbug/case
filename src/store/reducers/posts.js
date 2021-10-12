import * as actionTypes from "../actions/actionTypes";

let initialState = {
  isLoading: false,
  posts: [{ title: "", body: "" }],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
