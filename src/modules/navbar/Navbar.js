import React from 'react';
import '../../assets/scss/Navbar.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                <li><AnchorLink href="#page-home">Home</AnchorLink></li>
                <li><AnchorLink href="#page-skills">Skills</AnchorLink></li>
                <li><AnchorLink href="#page-resume">Resume</AnchorLink></li>
                <li><AnchorLink href="#page-profile">Me</AnchorLink></li>
                <li><AnchorLink href="#page-contact">Contact</AnchorLink></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;