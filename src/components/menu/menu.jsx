import React from 'react'
import{ Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./menu.css"

const Menu = ({black}) => {
  return (
<div>
<header className={black ? 'black' : ''}>
  <Navbar bg="black" variant="dark" expand="lg"  >
  <Container>
    <Link className='btn btn-danger' to={-1} >Back</Link>
    <Navbar.Brand href="">Testando React</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown menuVariant='dark' title="Dropdown" id="basic-nav-dropdown">
          <Link className='nav-link' to="/carros" >Carros</Link>
          
          <Link className='nav-link' to="/filmes/populares" >filmes populares</Link>
          <Link className='nav-link' to="/filmes/cartaz" >filmes cartaz</Link>
          <Link className='nav-link' to="/filmes/lancamento" >filmes lançamento</Link>
          <Link className='nav-link' to="/series" >series</Link>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  </header>  
  </div>
  )
}

export default Menu