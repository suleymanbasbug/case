import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/actions/posts";
import { Link } from "react-router-dom";
export default function Posts({ searchTerm }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  posts.posts = useSelector((state) =>
    state.posts.posts.filter((x) =>
      x.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Row className="mt-4">
        {posts.isLoading ? (
          <p>Yükleniyor...</p>
        ) : (
          posts.posts.map((post) => {
            return (
              <Col xs="4" className="mt-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link to={`/post/${post.id}`}>Detaylar</Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
}
