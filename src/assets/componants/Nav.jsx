import React from 'react';
import './nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import photaonav from '../img/logo.svg';

const NAV = () => {
  return (
    <div className="container">
      <div className="row BoBs KKoo">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src={photaonav} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="">
              <ul className="navbar-nav mr-auto unListed">
                <li className="nav-item active">
                  <a className="nav-link Listed" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link Listed" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link Listed" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link Listed" href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <a href='https://wa.me/201117254520' className='contact-nav'>Contact Me</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NAV;
