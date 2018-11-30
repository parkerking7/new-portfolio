import React from 'react';
import '../../assets/scss/Contact.scss';

const Contact = props => {
  return (
    <section id="page-contact" className="page-contact">
    <div className="container">
        <header className="section-header">
            <h2 className="section-title"><span>Contact</span></h2>
        </header>
        <div className="row">
            <div className="col-md-12 contact-info">
                <p><i className="fa fa-phone"></i> (801) 592-8538</p>

                <p><a href="mailto:parker.king0807@gmail.com"><i className="fa fa-envelope-o"></i> parker.king0807@gmail.com</a></p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/parkerking7" className="btn btn-round btn-clear btn-instagram" target="_blank" rel="noopener noreferrer"><i
                            className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/parker-king" className="btn btn-round btn-clear btn-linkedin" target="_blank" rel="noopener noreferrer"><i
                            className="fa fa-linkedin-square"></i></a>
                </div>
            </div>
        </div>

    </div>
</section>
  );
}

export default Contact;




