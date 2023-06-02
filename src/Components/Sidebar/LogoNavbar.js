import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from './assets/logo.svg';

export default function LogoNavbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
        <a href="/" className="d-flex justify-content-center pt-3">
          <Logo alt='Octopus Logo Brand' className="col-md-10" height="66"/>
        </a>
    </Container>
    </Navbar>
    </>
  )
}
