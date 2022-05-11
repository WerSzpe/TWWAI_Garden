import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className='navback'>
        <div className='title'>
          <Link to="/" style={{textDecoration:"none", color: "#faf0e6"}}>GardenGarden</Link>
        </div>
        <ul className='nav-list'>
          <li>
            <Link to="/" className='list-el'>Home</Link>
          </li>
          <li>
            <Link to="/calendar" className='list-el'>Calendar</Link>
          </li>
          <li>
            <Link to="/ll" className='list-el'>Log out</Link>
          </li>
          <div className='clear-float'></div>
        </ul>
        
    </div>
  )
}

export default Navbar;