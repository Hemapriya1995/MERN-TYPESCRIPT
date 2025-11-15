import { useState } from "react";
import { sampleProducts } from "./data";
import "./index.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column h-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet></Outlet>
        </Container>
      </main>
      <footer className="text-center">All rights reserved</footer>
    </div>
  );
}

export default App;
