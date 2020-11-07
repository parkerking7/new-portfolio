import React from 'react';
import '../../assets/scss/Me.scss';

import selfPicture from '../../assets/images/parker-photo.jpg';

const Me = props => {
  return (
    <section id="page-profile" className="page-profile">
    <div className="container">
        <header className="section-header">
            <h2 className="section-title">About Me</h2>

            <div className="spacer"></div>
            
        </header>
        <div className="row">
            <div className="col-md-3">
                <div className="profile"><img src={selfPicture} alt="profile"/></div>
            </div>
            <div className="col-md-9">
                <p>While looking for a career I had decided to jump on the oportunity that I had seen with V school, a 600 hour immersive JavaScript course. Through this school I realized that programming is something that I'm passionate about and I really enjoy the whole process of creating something and seeing it in a production build!</p>

                <p>Following schooling I worked as a front end developer at Orovo, handling over 100 sites. During my time with that company I helped implement source control for all existing sites, a large improvement from how everything was handled before. I also had the opportunity to learn PHP and Wordpress during my time there.</p>
                
                <p>My most recent role was as a web developer for Rocky Mountain Oils. I currently handle 3 sites, a Magento site, Wordpress site, and a Ruby on Rails site. Early on in my position with this company I was tasked with building an entire revamp of their site in a Ruby on Rails environment. I was new to Ruby and hadn't worked with it prior, but was able to handle the transition effortlessly.</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default Me;



