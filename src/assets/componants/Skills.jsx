import React from 'react';
import './skills.css'
import iconONE from '../img/product-chain-1.png';
import iconTWO from '../img/tag-1.png';
import iconTHREE from '../img/feather-pen-2.png';
import iconFOUR from '../img/feather-pen-1.png';
import { ImHtmlFive } from "react-icons/im";
const Skills = () => {
  return (
    <div className='ELPAPA text-center'>
        <div className="afterExperience ">
<h5>My Skills</h5>
<h1> Expertise</h1>
        </div>
        <div className="row FOURELEMENTS text-center">
<div className="col-lg-3  col-sm-12 Kollo">
    <img src={iconONE}  alt="" />
    <div className='information'>
        <h3>HTML</h3>
        <p>HTML is a markup language used to build and style web pages, offering creative enjoyment and ongoing challenges."</p>
    </div>

</div>
<div className="col-lg-3 col-sm-12 Kollo">
<img src={iconTWO} alt="" />
<div className='information2'>
<h3>CSS</h3>
<h3>&Boot Strap</h3>
        <p>CSS, Cascading Style Sheets, defines webpage presentation, enhancing layout, design, and aesthetics.</p>
</div>
</div>
<div className="col-lg-3 col-sm-12 Kollo">
<img src={iconTHREE} alt="" />
<div className='information2'>
<h3>REACT</h3>
        <p>React, a JavaScript library, streamlines UI development, facilitating component-based architecture for scalable, interactive web applications.





</p>
</div>
</div>
<div className="col-lg-3 col-sm-12 Kollo">
<img src={iconFOUR} alt="" />
<div className='information2'>
<h3>JAVA-SCRIPT</h3>
        <p>JavaScript, a dynamic scripting language, empowers web interactivity, enabling dynamic content manipulation and user engagement.</p>
</div>
</div>

        </div>
      
    </div>
  );
}

export default Skills;
