import React from 'react'
import{ Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
<div>

    <Navbar bg="light" expand="lg" fixed='top'>
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <Link className='nav-link' to="/carros" >Carros</Link>
          <Link className='nav-link' to="/array" >Array</Link>
          
          <Link className='nav-link' to="/contador" >Objeto</Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  
  </div>
  )
}

export default Menu