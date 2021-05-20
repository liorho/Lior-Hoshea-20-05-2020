import React from 'react'
import { Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header(props) {
  return (
    <Navbar>
<Navbar.Brand href="#home">Weatherly</Navbar.Brand>
    </Navbar>
  )
}


export default Header

