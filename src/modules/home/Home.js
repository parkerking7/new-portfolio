import React from 'react';
import '../../assets/scss/Home.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = props => {
    return (
        <section id="page-home" className="page-home">
    <div className="container">
        <div className="row">
            <header className="centered">
                <h1>Parker King</h1>

                <p>Web Developer</p>
            </header>
            <div className="social-icons">
                <a href="https://github.com/parkerking7" title="GitHub" className="btn btn-round btn-clear btn-github" target="_blank"><i
                        className="fa fa-github"></i></a>
                <a href="https://www.instagram.com/parkerking7" title="Instagram" className="btn btn-round btn-clear btn-instagram"
                   target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/parkerking7" title="Linkedin" className="btn btn-round btn-clear btn-linkedin"
                   target="_blank"><i className="fa fa-linkedin-square"></i></a>
            </div>
            <AnchorLink href="#page-skills" class="btn btn-default hire-me">Continue to Site</AnchorLink>
        </div>
    </div>
</section>
    );
}

export default Home;