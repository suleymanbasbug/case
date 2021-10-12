import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header({ setSearchTerm }) {
  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>{<Link to="/">Posts</Link>}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search For Test Title"
            className="mr-2"
            aria-label="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            disabled={location.pathname !== "/" ? true : false}
          />
          <Button
            variant="primary"
            disabled={location.pathname !== "/" ? true : false}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
