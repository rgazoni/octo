import React from 'react'
import Nav from 'react-bootstrap/Nav';
import LogoNavbar from './LogoNavbar';
import NavOptions from './NavOptions';

export default function Sidebar() {
  return (
    <>
    <Nav className="col-md-12 d-none d-md-block sidebar min-vh-100" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>

        <LogoNavbar />

        <NavOptions />

    </Nav>
    </>
  )
}
