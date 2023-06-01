import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>

            <nav className="navs">
                <ul>
                    <li className="navItems">
                        <NavLink to="/" className="text">Home</NavLink>
                    </li>
                    <li className="navItems">
                        <NavLink to="/addscenario" className="text">Add Scenario</NavLink>
                    </li>
                    <li className="navItems">
                        <NavLink to="/allscenario" className="text">All Scenarios</NavLink>
                    </li>
                    <li className="navItems">
                        <NavLink to="/addvehicle" className="text">Add Vehicle</NavLink>
                    </li>
                </ul>
            </nav>


        </div>
    );
};

export default Navbar;