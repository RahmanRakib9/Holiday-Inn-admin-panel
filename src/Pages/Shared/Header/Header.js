import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
     return (
          <Navbar bg="dark" variant="dark">
               <Container>
                    <Link to='/' className='header-link'>Home</Link>
                    <Link to='/addService' className='header-link'>Add Service</Link>
                    <Link to='/serviceList' className='header-link'>Service List</Link>
               </Container>
          </Navbar>
     );
};

export default Header;