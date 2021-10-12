import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Posts from "./components/Posts/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./components/Posts/PostDetail";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Container>
      <Router>
        <Header setSearchTerm={setSearchTerm} />
        <Route
          exact
          path="/"
          component={(props) => <Posts searchTerm={searchTerm} />}
        />
        <Route path="/post/:id" component={PostDetail} />
      </Router>
    </Container>
  );
}

export default App;
