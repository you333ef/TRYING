import React from 'react';
import './header.css';

import phat from '../img/1.jpeg'

const Header = () => {
  return (
    <div className='container HEADERPAPA'>
      <div className="row">
        <div className="col-lg-5  col-sm-12 ZEZO">
<div className="div">
<h5>Hey, I'm Yousef</h5>
<h1>Front End<br/>
Developer</h1>
<p>I am always looking forward to new challenges and exciting opportunities to apply my knowledge and skills in future projects.<br/> 
Dolorum, quas. Amet soluta assumenda cum?</p>
<button className='Get'>Get In Touch</button>

</div>
        </div>
        <div className="col-lg-7 col-sm-12 joo">
<img src={phat}  className="Photo"alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
