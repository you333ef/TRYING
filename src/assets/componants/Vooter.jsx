import React from 'react'
import photaonav from '../img/logo.svg'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import './vooter.css'
const Vooter = () => {
    return (
        <div className='container'>
        <footer className='row joja'>
     <div className="col-lg-2 bb">
<img src={photaonav} alt=""  className='xxb'id='xxb'/>
</div>
<div className ="col-lg-7">
<div id='nonepasha'>
<ul className='unListed'>
<li><a className='Listed change' href="#Home">Home</a></li>
<li><a className='Listed change' href="#Protifolio">Protifolio</a></li>
<li><a className='Listed change' href="#About">About Me</a></li>
<li><a className='Listed change' href="#Testimonials">Testimonials</a></li>
</ul>
</div>
</div>

<div className="col-lg-3 iconsss ">

<ul>  
    <li><a href=''><FaFacebook  className='fafa'/></a></li>
    <li><a href=''><IoLogoInstagram  className='fafa'/></a></li>
    <li> <a href=''><IoLogoTwitter className='fafa' /></a></li>
    <li> <a href=''><FaLinkedin className='fafa' /></a></li>
</ul>

</div>
<hr />
</footer>
<footer className='PARTTWOFOOTER'>

<p className='pragraph'> Made by @Yousef Khaled</p>


    
</footer>

</div>
    )
}

export default Vooter
