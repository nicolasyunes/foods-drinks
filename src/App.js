import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

import {Container,Nav,Navbar} from "react-bootstrap"

function App() {
  return (
    <div className="App bg-dark">
    <div className="container-fluid" >
            <Navbar variant="light" bg="light">
                <Container>
                  <Navbar.Brand  as={Link} to="/">Food F</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                    <Nav.Link as={Link} to="/other" >other</Nav.Link>
                    
                  </Nav>
              </Container>
            </Navbar>
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>


    </div>

      
    </div>
  );
}

export default App;