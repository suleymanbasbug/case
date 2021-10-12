import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getPosts = () => (dispatch) => {
  dispatch({ type: "GET_POSTS_START" });
  const url = "https://jsonplaceholder.typicode.com/posts";
  axios
    .get(url)
    .then((res) =>
      dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload: res.data })
    );
};
