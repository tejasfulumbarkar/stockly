import React from 'react'
import { Link } from 'react-router-dom';
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
                                <Link className="nav-link active fs-5" aria-current="page" to="/about" >About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/support">support </Link>
                            </li>
                        </ul>
                        <Link to="/signup" className="btn my-btnn" role="button">Sign Up</Link>
                    </div>
                </div>
            </nav>

        </div>);
}

export default TopNav;
