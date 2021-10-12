import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/actions/postDetail";
import { getUserDetail } from "../../store/actions/userDetail";

export default function PostDetail(props) {
  const postId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostDetail(postId));
  }, []);
  const postDetail = useSelector((state) => state.postDetail);
  useEffect(() => {
    dispatch(getUserDetail(postDetail.postDetail.userId));
  }, [postDetail]);

  const userDetail = useSelector((state) => state.userDetail);
  return (
    <Card style={{ width: "58rem" }} className="mt-5">
      <Card.Body>
        <Card.Title>{postDetail.postDetail.title}</Card.Title>
        <Card.Text>{postDetail.postDetail.body}</Card.Text>
        Author Name:<Card.Link> {userDetail.userDetail.name}</Card.Link>
      </Card.Body>
    </Card>
  );
}
