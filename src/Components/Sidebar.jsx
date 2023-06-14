import React from 'react';
import './Sidebar.css';

import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Sidebar= () => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home 
      </Link>
      <Link className="menu-item" to="/salad">
        Salads
      </Link>
      <Link className="menu-item" to="/pizza">
        Pizzas
      </Link>
      <Link className="menu-item" to="/dessert">
        Desserts
      </Link>
    </Menu>
  )
}
export default Sidebar

