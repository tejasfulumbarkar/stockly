import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './TopNav.css'

function TopNav() {
    return (

        <div className=''>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid d-flex justify-content-between pl-2">
                    
                    <a className="navbar-brand me-5 fs-3" href="#">Stockly</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink end className={({ isActive }) => `nav-link fs-5  ${isActive ? 'is-active' : ''}`} to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'is-active' : ''}`} to="/about" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'is-active' : ''}`} to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'is-active' : ''}`} to="/pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'is-active' : ''}`} to="/support">support </NavLink>
                            </li>
                        </ul>
                        <Link to="/signup" className="btn my-btnn" role="button">Sign Up</Link>
                    </div>
                </div>
            </nav>

        </div>);
}

export default TopNav;
