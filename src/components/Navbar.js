import { Component } from "react";
import "react-icons";
//import './NavbarStyles.css'
import {Link, Navigate } from "react-router-dom";

import '../components/NavbarStyles.css'

class Navbar extends Component
{
    
    render()
    {
        return(
            <nav className="NavbarItems">
                <Link to='/' className='logo'><h1>FitBox<i className="fas fa-heartbeat"></i></h1></Link>
                <ul className="nav-menu">

                <Link to='/Equipment' className="nav-links">Equiment</Link>
                <Link to='/Pricing' className="nav-links">Pricing</Link>
                <Link to='/Excercises' className="nav-links">Excercises</Link>
                <Link to='/Admin' className="nav-links">Admin</Link>


                </ul>
            </nav>
        )
    }
}

export default Navbar;