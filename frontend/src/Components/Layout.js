import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

const Layout = (props) => {



  const navigate = useNavigate();
  //get user details from the store
  const user = useSelector((state) => state.User);

  // logout function
  const handleLogout = () => {
    //remove the token
    localStorage.removeItem("token");
    //navigate to the login page
    navigate("/Login");
  };
  
  return (
    <div>
      <Navbar className='header' bg="dark" variant="dark">
      {user && user.isAuth ? (
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
          <Navbar.Collapse className="justify-content-end">
              
              <NavDropdown 
                id="nav-dropdown-dark-example"
                title={
              <Navbar.Text>Signed in as: {user.name}</Navbar.Text>
                  
                }
                
              >
                <NavDropdown.Item onClick={() => handleLogout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
          ) : (

            <Container>
            <Navbar.Brand>CARS FOR YOU</Navbar.Brand>
            <Nav variant="pills">
              <Nav.Item className="justify-content-end">
                <Nav.Link as={Link} to="/Login">
                  LogIn
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Register">
                  SignUp
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        )}
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