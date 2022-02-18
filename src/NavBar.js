import {React} from 'react';
import {Container,Nav,Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';



function NavBar () {
    return (
        <>
            <Navbar variant="light" bg="light">
                <Container>
                  <Navbar.Brand  as={Link} to="/home">Food F</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                   
                  </Nav>  
                </Container>
              
                
                <Container className="justify-content-end">
                <Nav.Link as={Link} to="/" >Login</Nav.Link>
                <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>
                </Container>
                
            </Navbar>
        </>
    )
}

export default NavBar;
