import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Layout = (props) => {

  const navigate = useNavigate()
    const logout=(token)=>{
        localStorage.removeItem("token")
        navigate('/')
    }
    const token=localStorage.getItem('token')
    
  
  return (
    <div>
      <Navbar className='header' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">CARS FOR YOU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/add">
              Add Car
            </Nav.Link>
            
            <Nav.Link as={Link} to="/edit">
              Edit Car
            </Nav.Link>
            <Nav.Link as={Link} to="/userslist">
              Clients
            </Nav.Link>
            
            
          </Nav>
          <Nav>
            <Nav.Link >Admin</Nav.Link>
            <Nav.Link >
              Log out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <div className='main'>
    {props.children}
</div>
<div className='footer'>
    <p>&copy;2022.All rights reserved. Powered by GARBAA Alaeddine</p>
</div>
</div>
  );
};

export default Layout;