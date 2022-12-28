
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


function Header() {
  return (
    <div className="container-fluid">
        <div className="roe">
            <div className="col-10 mx-auto">
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand className="fs-1 fw-bold" href="#">Web<span className='text-primary'>Tech</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 text-center">
            <NavLink className='text-decoration-none navlink px-2 fs-4' to="/">Home</NavLink>
            <NavLink className='text-decoration-none  navlink px-2 fs-4'  to='/about'>About</NavLink>
            <NavLink className='text-decoration-none  navlink px-2 fs-4'  to='/service'>Service</NavLink>
            <NavLink className='text-decoration-none navlink px-2 fs-4'  to='/contact'>Contact</NavLink>
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    </div>
  );
}
export default Header;