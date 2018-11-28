import React from 'react';
import '../../assets/scss/Navbar.scss';

const Navbar = props => {
  return (
    <nav className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav" id="main-menu">
                <li><a href="#page-home">Home</a></li>
                <li><a href="#page-skills">Skills</a></li>
                <li><a href="#page-resume">Resume</a></li>
                <li><a href="#page-education">Education</a></li>
                <li><a href="#page-profile">Me</a></li>
                <li><a href="#page-contact">Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;