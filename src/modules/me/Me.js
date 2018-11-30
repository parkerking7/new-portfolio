import React from 'react';
import '../../assets/scss/Me.scss';

import selfPicture from '../../assets/images/parker-photo.jpg';

const Me = props => {
  return (
    <section id="page-profile" className="page-profile">
    <div className="container">
        <header className="section-header">
            <h2 className="section-title">Me</h2>

            <div className="spacer"></div>
            
        </header>
        <div className="row">
            <div className="col-md-3">
                <div className="profile"><img src={selfPicture} alt="profile"/></div>
            </div>
            <div className="col-md-9">
                <p>I have always been interested in the idea of programmying but I hadn't started looking at it as a career option until after I'd finished highschool.</p>

                <p>I had decided to jump on the oportunity that I had seen with V school, a 600 hour immersive JavaScript course. Through this school I realized that programming is something that I'm passionate about and I really enjoy the whole process of creating something and seeing it in a production build!</p>

                <p>I'm currently working as a front end developer at Orovo, handling over 100 sites. In my time here I've helped implement source control for all existing sites, a large improvement from how everything was handled before. I've also had the opportunity to learn PHP and Wordpress during my time here, which has been very interesting to say the least.</p>

            </div>
        </div>
    </div>
</section>
  );
}

export default Me;



