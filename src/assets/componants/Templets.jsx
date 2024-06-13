
import './templets.css';
import Ecommerfe from '../img/placeholder-image-2.png';
import { FaArrowTrendUp } from "react-icons/fa6";
import EditPhoto from '../img/placeholder-image-1.png';
import SMALLPRoject from '../img/placeholder-image.png';
import TODOLIST from '../img/placeholder-image-2.png';
const TEMPLETS = () => {
  return (
    <div className='container'>
      <div className='grid'>
        <div className='item'>
          <img src={Ecommerfe} className='templetsimage' alt="E-commerce project" />
          <div className='information'>
            <h3>ECOMMERCE</h3>
            <p>I developed a responsive e-commerce site using HTML, CSS, JS, Bootstrap, and React. It features a Fake API, React Icons, and other libraries, ensuring functionality on mobile screens.</p>
            <a href='http://tessst-git-main-yousef1.vercel.app' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>

        <div className='item'>
          <img src={SMALLPRoject} className='templetsimage' alt="CRUD Manager project" />
          <div className='information'>
            <h3>CRUD PROJECT</h3>
            <p>I developed a CRUD project for product management using Bootstrap and JavaScript without any frameworks. The application performs data calculations, allows modifications, deletions,</p>
            <a href='https://you333ef.github.io/CRUD_PROJECT/' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>

        <div className='item'>
          <img src={EditPhoto} className='templetsimage' alt="Edit Photo project" />
          <div className='information'>
            <h3>EDIT PHOTO</h3>
            <p>I created a photo effects application using Bootstrap and JavaScript without frameworks. It includes various effects like Saturate, Contrast, and Brightness, providing</p>
            <a href=' https://you333ef.github.io/EDITING/' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>

        <div className='item'>
          <img src={SMALLPRoject} className='templetsimage' alt="Small Project" />
          <div className='information'>
            <h2 id='SIZE'>BOOK STORE</h2>
            <p>A book display website, built with HTML, CSS, and JavaScript, showcases books attractively. Designed for large screens like laptops and desktops, it ensures a visually appealing and user-friendly experience for book enthusiasts.</p>
            <a href=' https://you333ef.github.io/Books' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>

        <div className='item'>
          <img src={EditPhoto} className='templetsimage' alt="XO Game project" />
          <div className='information'>
            <h3>GAME XO</h3>
            <p>Tic-Tac-Toe is a classic game for two players, X and O, who take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins. Lorem ipsum dolor sit amet.</p>
            <a href='https://you333ef.github.io/GAMEEE' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>

        <div className='item'>
          <img src={TODOLIST} className='templetsimage' alt="To-Do List project" />
          <div className='information'>
            <h3>ToDO LIST</h3>
            <p>A To-Do List application helps users manage tasks efficiently. Built using HTML, CSS, and JavaScript, it allows adding, editing, and deleting tasks. LocalStorage ensures tasks persist across sessions. Lorem ipsum dolor sit amet.</p>
            <a href=' https://you333ef.github.io/TODO' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>
        <div className='item'>
          <img src={EditPhoto} className='templetsimage' alt="To-Do List project" />
          <div className='information'>
            <h3>Airport</h3>
            <p>Airport Wep helps users manage tasks efficiently. Built using HTML, CSS, and Bootstrap, it allows adding, design responsive, and deleting tasks. LocalStorage ensures tasks persist across sessions. Lorem ipsum dolor sit amet.</p>
            <a href='  https://you333ef.github.io/AIR ' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
   
          </div>
        </div>
        <div className='item'>
          <img src={SMALLPRoject} className='templetsimage' alt="To-Do List project" />
          <div className='information'>
            <h3>A professional browser interface.</h3>
            <p>During the course with engineer Abdulrahman Gamal, I created a beautiful website interface using HTML, CSS, and JavaScript. I focused on learning events, especially onscroll, to create an engaging scrolling experience.
</p>
            <a href='https://you333ef.github.io/COMCOMERACE/' id='GETHUP'>View on GitHub <FaArrowTrendUp /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TEMPLETS;
