import React from 'react';
import image from '../img/_d7e2bd62-6516-4e52-b667-c72c21192da7.jpeg'
import NANA from '../img/IMG-20240522-WA0004.jpg'
import KOKO from '../img/IMG-20240522-WA0003.jpg'

import './about.css';
const About = () => {
  return (
    <div className='container '>
    <div className='row ABOUTME'>
        <div className="col-lg-6 col-sm-10 ME">
<img src={NANA} alt="####"  className='img'/>
        </div>
        <div className="col-lg-6 col-sm-10 ME">

<h2 id='intro'>About Me</h2>
<p id='uuuu'>Hello! I am Youssef Khaled,20 years old ,a passionate and creative front-end developer. I have extensive experience in front-end development, having worked on many large, small, and medium-sized projects that have equipped me with diverse skills in this field. I am currently studying at the Faculty of Arts, Zagazig University, which gives me a unique perspective that combines arts and technology. I studied front-end development at Bravo Company, where I learned the best practices and latest technologies. I am always looking forward to ...</p>

        </div>      
    </div>
    </div>
  );
}
export default About;
