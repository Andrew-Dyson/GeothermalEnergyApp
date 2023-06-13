import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

  return (
    <div className="NavBar">
    <h1>GeothermalEnergyViewer</h1>
    <ul>
      <li>
        <Link className="NavLink" to="/data-plotting">Data Plotting</Link>
      </li>
      <li>
        <Link className="NavLink" to="/resource-calculator">Resource Calculator</Link>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;