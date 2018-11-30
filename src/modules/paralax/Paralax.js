import React from 'react';
import '../../assets/scss/Paralax.scss';
import starryBackground from '../../assets/images/starry-background.JPG'
const Paralax = props => {
  return (
    <div>
    <img className="star-background" src={starryBackground} alt='' />
    <div className="star-overlay"></div>
    </div>
  );
}

export default Paralax;