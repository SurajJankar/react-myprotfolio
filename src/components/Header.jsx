import React from 'react';
import logo from './assets/images/logo.png'

function Header() {
    return (
        <header id="header" className="wpo-header-style-1">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <a className="navbar-brand site-logo" href="/index.php">
                                        <img src={logo} alt="Logo" />Suraj.
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close">
                                        <i className="ti-close"></i>
                                    </button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <a href="/index.php">Home</a>
                                        </li>
                                        <li>
                                            <a href="/about.php">About</a>
                                        </li>
                                        <li>
                                            <a href="/Gallery.php">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="/Projects.php">Projects</a>
                                        </li>
                                        <li>
                                            <a href="/contact.php">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-btn">
                                        <a
                                            className="theme-btn fa fa-download"
                                            download="Suraj Jankar CV"
                                            href="assets/suraj_jankar.pdf"
                                            title="Download Resume"
                                        >
                                            <img className="hide-img" alt="Resume" src="assets/suraj_jankar.pdf" />
                                            &#160;Resume &#160; &#xf019;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
