import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/weather-icon-512.png';

function Header(props) {
  const { location } = props;
  return (
    <Navbar >
      <Navbar.Brand href='https://github.com/liorho/Lior-Hoshea-20-05-2020' target='_blank'>
        <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='Weatherly logo' /> Weatherly
      </Navbar.Brand>
      <Nav activeKey={location.pathname}>
        <LinkContainer to='/home'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/favorites'>
          <Nav.Link>Favorites</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default withRouter(Header);
