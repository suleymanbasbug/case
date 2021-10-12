import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getPostDetail = (id) => (dispatch) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  axios
    .get(url)
    .then((res) =>
      dispatch({ type: actionTypes.GET_POST_DETAIL, payload: res.data })
    );
};
