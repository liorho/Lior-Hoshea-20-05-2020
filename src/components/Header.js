import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

import { WEBSITE_URL, DARK_MODE } from '../constants';
import logo from '../assets/weather-icon-512.png';
import ModeBtn from './ModeBtn';
import UnitsBtn from './UnitsBtn';

function Header(props) {
  const { location } = props;
  const mode = useSelector((state) => state.mode);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'color-inherit' : mode === DARK_MODE ? 'text-muted' : ''
  }

  return (
    <Navbar collapseOnSelect expand='sm' className='sticky-top bg-inherit'>
      <Navbar.Brand href={WEBSITE_URL} target='_blank' className='logo color-inherit'>
        <img src={logo} className='logo-img' alt='Weatherly logo' /> Weatherly
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav.Item className='d-flex justify-content-between w-100'>
          <Nav activeKey={location.pathname} className='mr-auto'>
            <LinkContainer to='/home'>
              <Nav.Link className={getNavLinkClass('/home')}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/favorites'>
              <Nav.Link className={getNavLinkClass('/favorites')}>Favorites</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Item className='py-2'>
              <UnitsBtn />
            </Nav.Item>
            <Nav.Item className='p-2'>
              <ModeBtn />
            </Nav.Item>
          </Nav>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
