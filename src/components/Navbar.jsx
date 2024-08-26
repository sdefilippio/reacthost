import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Pizzeria Mamma Mia</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
