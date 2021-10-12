import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getUserDetail = (id) => (dispatch) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  axios
    .get(url)
    .then((res) =>
      dispatch({ type: actionTypes.GET_USER_DETAIL, payload: res.data })
    );
};
