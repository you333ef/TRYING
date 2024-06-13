import React from 'react';
import './projects.css';
import { CiBasketball } from "react-icons/ci";

const Projects = () => {
  return (
    <div className='ABOUTME'>
      <div className="brtween ">
        <div>
          <h5>Recent Projects</h5>
          <h3 id='Portfolio'><span>My</span> Portfolio</h3>
        </div>
        <button className='visiteme btn btn-primary'>
          Visit My GitHub
        </button>
      </div>
    </div>
  );
}

export default Projects;
