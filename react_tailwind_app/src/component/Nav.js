import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </div>
  )
}

export default Nav