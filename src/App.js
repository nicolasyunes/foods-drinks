import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";
import Shop from "./Shop";
import {Container,Nav,Navbar,Button} from "react-bootstrap"
import Login from "./Login";
function App() {



  return (
    <div className="App container">
    <div className="navbar" >
            <Navbar variant="light" bg="light">
                <Container>
                  <Navbar.Brand  as={Link} to="/">Food F</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/About" >About</Nav.Link>
                  </Nav>  
                </Container>
              
                
                <Container className="justify-content-end">
                    <Navbar.Brand  as={Shop}/>
                    <Nav.Link as={Link} to="/Login" >login</Nav.Link>
                </Container>
                
            </Navbar>
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Login" element={<Login />} />
      </Routes>


    </div>

      
    </div>
  );
}

export default App;