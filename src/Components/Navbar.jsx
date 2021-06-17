import React from 'react';
import images from '../images/HO.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid" />

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={images} className="image" /></a>
          </div>
      
          
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">ABOUT US</a></li>
            </ul>
    
      </nav>
    );
}

export default Navbar;
