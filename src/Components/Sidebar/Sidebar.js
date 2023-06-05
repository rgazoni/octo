import React from 'react'
import LogoNavbar from './LogoNavbar';
import NavOptions from './NavOptions';

export default function Sidebar() {
  return (
    <>
    <div className="sidebar-sticky min-vh-100">
      <LogoNavbar />
      <NavOptions />
    </div>
    </>
  )
}