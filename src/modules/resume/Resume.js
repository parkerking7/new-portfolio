import React from 'react';
import '../../assets/scss/Resume.scss';

const Resume = props => {
  return (
    <section id="page-resume" className="page-resume">
    	<div id="resume-container" className="container">
        	<header className="section-header">
            	<h2 className="section-title"><span>Resume</span></h2>

            	<div className="spacer"></div>
        	</header>
        	<div className="button-div">
        		<a href={require('../../assets/files/parkerKingResume.pdf')} download="parkerKingResume" className="btn btn-default hire-me">Download Resume</a>
        	</div>
        </div>
	</section>
  );
}

export default Resume;