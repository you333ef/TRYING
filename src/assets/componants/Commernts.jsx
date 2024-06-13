import React from 'react';
import './comments.css';
import { FaStar } from "react-icons/fa";
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';

const Comments = () => {
  return (
    <div className='container Allcomments ABOUTME'>
      <div className='row justify-content-center jdjdj'>
        <div className="col-lg-4 col-md-6 col-sm-12 mems">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div className="commentat">
            <p>I am extremely satisfied with the front-end developer's work; their coding skills and attention to detail are exceptional.</p>
          </div>
          <div className="under">
            <img src={one} alt="" />
            <h4>Dianne Russel</h4>
            <h5>Starbucks</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mems">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div className="commentat">
            <p>The front-end developer delivered an outstanding user interface, ensuring our website is both visually appealing and highly functional.</p>
          </div>
          <div className="under">
            <img src={two} alt="" />
            <h4>Dianne Russel</h4>
            <h5>Starbucks</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mems">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div className="commentat">
            <p>Working with this front-end developer has been a fantastic experience; their creativity and technical expertise are truly impressive.</p>
          </div>
          <div className="under">
            <img src={three} alt="" />
            <h4>Dianne Russel</h4>
            <h5>Starbucks</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
