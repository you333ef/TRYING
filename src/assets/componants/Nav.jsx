import React from 'react';
import './nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import photaonav from '../img/logo.svg';
const NAV = () => {
return (
<div className="container">
<div className="row BoBs KKoo">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#"><img src={photaonav} alt="" /></a>
<button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarText">
<div className="">
<ul class="navbar-nav mr-auto unListed">
<li class="nav-item active">
<a class="nav-link Listed" href="#">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
<a class="nav-link Listed" href="#">Protifolio</a>
</li>
<li class="nav-item">
<a class="nav-link Listed" href="#">About</a>
</li>
<li class="nav-item">
<a class="nav-link Listed" href="#">Testimonials</a>
</li>
</ul>
</div>
<div className="col-lg-4">
<a href='https://wa.me/201117254520' className='contact-nav'>Contact Me</a >
</div>
</div>
</nav>
</div>
</div>
  );
};
export default NAV;
