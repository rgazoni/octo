import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from './assets/logo.svg';

export default function LogoNavbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" className='d-flex justify-content-center'>
      <div className='d-flex'>
          <a href="/" className="pt-3 p-2">
            <Logo alt='Octopus Logo Brand' className="" height="45" width='auto'/>
          </a>
      </div>
    </Navbar>
    </>
  )
}
