import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import ToggleMode from '../Toggle/ToggleMode';
import { useEffect, useState } from 'react';
import ChangeMode from '../Toggle/ChangeMode';


function Header() {

  
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand ><p className='text-3xl'> Country Explorer</p></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        
          {/* <ToggleMode/> */}
          <ChangeMode/>
        
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;