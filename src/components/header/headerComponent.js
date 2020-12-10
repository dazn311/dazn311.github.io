import React from 'react';
import { Link } from "react-router-dom";

import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

const HeaderComponent = () => {
    return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand >ReactApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"> 
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/fav">Favorite</Link>  
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
     
        
    )
}

export default HeaderComponent;