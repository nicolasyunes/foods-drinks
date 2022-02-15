import React from 'react';
import {Container,Nav,Navbar} from "react-bootstrap"
import { Link  } from 'react-router-dom';
import Shop from "./Shop";


const NavBar = () => {
    return (
        <div>
            <Navbar variant="light" bg="light">
                <Container>
                  <Navbar.Brand  as={Link} to="/">Food F</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                    <Navbar.Brand  as={Shop}/>
                  </Nav>  
                </Container>
              
                
                <Container className="justify-content-end">
                  
                    <Nav.Link as={Link} to="/login" >login</Nav.Link>
                    <Nav.Link as={Link} to="/logout" >logout</Nav.Link>
                </Container>
                
            </Navbar>
        </div>
    )
}

export default NavBar;
