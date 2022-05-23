import React,{useState} from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  NavbarText,
  
} from 'reactstrap';
import image from '../../assets/images/navbar-image.png';

function Mynavbar() {
  return (
    <div style={{
      display: 'block', padding: 10
  }}>
      <Navbar
      className='container-fluid'
    color="bg-transparent"
    expand="md"
    light
  >
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="container-fluid"
        navbar
      >
        <img src={image} alt='' height={80}/>
        <NavItem >
          <NavLink href="/components/" className='position-absolute top-0 end-0'>
            Components
          </NavLink>
          <NavLink href="" className='position-absolute top-0 end-0' style={{marginRight:'5%'}}>
            GitHub
          </NavLink>
          <NavLink href="" className='position-absolute top-0 end-0' style={{marginRight:'8%'}}>
            GitHub
          </NavLink>
          </NavItem>
      
      </Nav>
      {/* <NavbarText>
        Simple Text
      </NavbarText> */}
    </Collapse>
  </Navbar>
  </div >
  )
}

export default Mynavbar;