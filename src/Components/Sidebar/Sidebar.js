import React from 'react'
import LogoNavbar from './LogoNavbar';
import NavOptions from './NavOptions';

export default function Sidebar(props) {
  return (
    <>
    <div className="sidebar-sticky min-vh-100">
      <LogoNavbar />
      <NavOptions tab={props.tab}/>
    </div>
    </>
  )
}