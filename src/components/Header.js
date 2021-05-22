import React from 'react';
import { Navbar, Nav, Button, Badge, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CELSIUS, FAHRENHEIT } from '../constants';
import { setUnits } from '.././store/actions/units';
import { SET_FAHRENHEIT, SET_CELSIUS } from '.././store/actions/actionTypes';
import logo from '../assets/weather-icon-512.png';

function Header(props) {
  const { location } = props;
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);
  const ToggleUnits = () => {
    dispatch(setUnits(units === CELSIUS ? SET_FAHRENHEIT : SET_CELSIUS));
  };

  return (
    <Navbar>
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
        <span onClick={ToggleUnits} style={{ cursor: 'pointer' }}>
          <span className={units === FAHRENHEIT ? 'text-muted' : ''}>°C</span>
          <span className='text-muted'> / </span>
          <span className={units === CELSIUS ? 'text-muted' : ''}>°F</span>
        </span>
      </Nav>
    </Navbar>
  );
}

export default withRouter(Header);
