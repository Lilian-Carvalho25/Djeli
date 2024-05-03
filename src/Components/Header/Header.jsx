import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Navbar className="navbar-header" expand="lg">
      <Container className='container-header-general'>
        <Navbar.Brand href="/" className='brand'><img src='logo-djeli-laranja.svg' alt='Logo da Djeli Laranja'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto brand">
          <Nav.Link href="/">Início</Nav.Link>
          <Nav.Link href="/sobrenos">Sobre nós</Nav.Link>
          <Nav.Link href="#parceiros">Parceiros</Nav.Link>
          <Nav.Link href="/faleconosco">Fale conosco</Nav.Link>
          </Nav>
          <Nav className='ms-auto container-buttons-header'>
            <Link to="/login"><button type="submit" id="button-login">Login</button></Link>
            <Link to="/cadastro"><button type='submit' id='button-cadastro'>Cadastre-se</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;