import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {WEBSITE_URL} from '../constants'
import logo from '../assets/weather-icon-512.png';

function Header(props) {
  const { location } = props;

  return (
    <Navbar className='mx-auto sticky-top bg-white' >
      <Navbar.Brand href={WEBSITE_URL} target='_blank' className="logo">
        <img src={logo} style={{width: "2rem", height: "2rem"}} className='d-inline-block align-top' alt='Weatherly logo' /> Weatherly
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' />
      <Nav activeKey={location.pathname} className='ml-auto'>
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
