import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
     return (
          <Navbar bg="dark" variant="dark">
               <Container>
                    <Link to='/' className='header-link'>Home</Link>
                    <Link to='/addEvent' className='header-link'>Add Events</Link>
                    <Link to='/editEvent' className='header-link'>Event List</Link>
               </Container>
          </Navbar>
     );
};

export default Header;