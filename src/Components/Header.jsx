import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Portfolio from './Portfolio';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Amna's PortFolio</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active
                                " aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" >SERVICES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="nav-link" >PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link" >BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" >CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                {/* <Home />
                <About />
                <Portfolio /> */}
            </div>
        </div>
    )
}

export default Header;
