import { useContext, useEffect, useState } from "react";

import "./index.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);
  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className="d-flex flex-column h-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
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
