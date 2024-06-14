import React from 'react';
import './nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import photaonav from '../img/logo.svg';

const NAV = () => {
  return (
   <div className='container'>
<div className='BoBs KKoo'>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src={photaonav} alt="photaonav" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav  unListed">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Protifolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Testimonials</a>
          </li>
        </ul>
        <a className="navbar-brand " id='contact-nav' href="https://wa.me/201117254520 ">Contact</a>

      </div>
    </nav>
    </div>



   </div>
  );
};

export default NAV;
