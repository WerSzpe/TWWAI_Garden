import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

  const logout = async() => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <div className='navback'>
        <div className='title'>
          <h3 style={{textDecoration:"none", color: "#faf0e6"}}>GardenGarden</h3>
        </div>
        {props.hideLinks?<></>:(
          <ul className='nav-list'>
            <li>
              <Link to="/" className='list-el'>Home</Link>
            </li>
            <li>
              <Link to="/" className='list-el' onClick={() => logout()}>Log out</Link>
            </li>
            <div className='clear-float'></div>
          </ul>
        )}
        
    </div>
  )
}

export default Navbar;