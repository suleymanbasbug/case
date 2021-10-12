import { combineReducers } from "redux";
import postDetail from "./postDetail";
import posts from "./posts";
import userDetail from "./userDetail";

export const reducer = combineReducers({
  posts: posts,
  postDetail: postDetail,
  userDetail: userDetail,
});
